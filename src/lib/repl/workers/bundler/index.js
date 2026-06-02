import * as rollup from '@rollup/browser';
import * as compiler from 'svelte/compiler';
import commonjs from './plugins/commonjs.js';
import glsl from './plugins/glsl.js';
import json from './plugins/json.js';

self.window = self; // egregious hack to get magic-string to work in a worker

let packagesUrl;
let svelteUrl;
let current_id;

let fulfil_ready;
const ready = new Promise((f) => {
	fulfil_ready = f;
});

self.addEventListener('message', async (event) => {
	switch (event.data.type) {
		case 'init':
			packagesUrl = remove_trailing_slash(event.data.packagesUrl);
			svelteUrl = remove_trailing_slash(event.data.svelteUrl);

			fulfil_ready();
			break;

		case 'bundle':
			await ready;
			const { uid, components } = event.data;

			if (components.length === 0) return;

			current_id = uid;

			setTimeout(async () => {
				if (current_id !== uid) return;

				const result = await bundle({ uid, components });

				if (is_abort(result.error)) return;
				if (result && uid === current_id) postMessage(result);
			});

			break;
	}
});

let cached = {
	dom: {},
	ssr: {}
};

const ABORT = Object.assign(new Error('ABORT'), { aborted: true });

function is_abort(error) {
	return error === ABORT || error?.aborted || /\bABORT\b/.test(error?.message || '');
}

function remove_trailing_slash(value) {
	return value.endsWith('/') ? value.slice(0, -1) : value;
}

async function get_bundle(uid, mode, cache, lookup) {
	let bundle;

	const imports = new Set();
	const warnings = [];
	const all_warnings = [];
	const needs_commonjs = Object.values(lookup).some((component) =>
		/\b(require|module|exports)\b/.test(component.source)
	);
	const needs_json = Object.keys(lookup).some((id) => id.endsWith('.json'));
	const needs_glsl = Object.keys(lookup).some((id) => id.endsWith('.glsl'));

	const new_cache = {};

	const repl_plugin = {
		name: 'repl',
		async resolveId(importee, importer) {
			if (uid !== current_id) throw ABORT;
			const resolved = await resolve_repl_import(importee, importer);
			return resolved ?? null;
		},
		async load(resolved) {
			if (uid !== current_id) throw ABORT;

			if (resolved in lookup) return lookup[resolved].source;
		},
		transform(code, id) {
			if (uid !== current_id) throw ABORT;

			self.postMessage({ type: 'status', uid, message: `bundling ${id}` });

			const original = code;
			const replaced = original.replace(
				/\bprocess\.env\.NODE_ENV\b/g,
				JSON.stringify('production')
			);
			code = replaced;

			if (!/\.svelte$/.test(id)) {
				return replaced === original ? null : { code: replaced, map: null };
			}

			const name = id.split('/').pop().split('.')[0];

			const result =
				cache[id] && cache[id].code === code
					? cache[id].result
					: compiler.compile(code, {
							generate: mode,
							css: 'injected',
							dev: true,
							filename: name + '.svelte',
							compatibility: {
								componentApi: 4
							}
						});

			new_cache[id] = { code, result };

			result.warnings.forEach((warning) => {
				warnings.push({
					message: warning.message,
					filename: warning.filename,
					start: warning.start,
					end: warning.end
				});
			});

			return result.js;
		}
	};

	async function resolve_repl_import(importee, importer) {
		const local = resolve_local_import(importee, importer, lookup);
		if (local) return local;

		if (importee.endsWith('/')) importee = importee.slice(0, -1);

		if (importee === 'svelte' || importee.startsWith('svelte/')) {
			if (is_local_importer(importer, lookup)) imports.add('svelte');
			return external(get_svelte_runtime_url(importee));
		}

		if (importee.startsWith('http:') || importee.startsWith('https:')) {
			return external(importee);
		}

		if (importer && /^https?:/.test(importer) && importee.startsWith('/')) {
			return external(new URL(importee, importer).href);
		}

		if (!importee.startsWith('.')) {
			if (is_local_importer(importer, lookup)) imports.add(get_package_name(importee));
			return external(get_package_module_url(importee));
		}

		return null;
	}
	const plugins = [
		repl_plugin,
		...(needs_commonjs ? [commonjs] : []),
		...(needs_json ? [json] : []),
		...(needs_glsl ? [glsl] : [])
	];

	try {
		bundle = await rollup.rollup({
			input: './App.svelte',
			plugins,
			onwarn(warning) {
				all_warnings.push({
					message: warning.message
				});
			}
		});

		return {
			bundle,
			imports: Array.from(imports),
			cache: new_cache,
			error: null,
			warnings,
			all_warnings
		};
	} catch (error) {
		if (is_abort(error)) throw ABORT;

		return { error, imports: null, bundle: null, cache: new_cache, warnings, all_warnings };
	}
}

async function bundle({ uid, components }) {
	if (import.meta.env.PROD) {
		console.clear();
		console.log(`running Svelte compiler version %c${compiler.VERSION}`, 'font-weight: bold');
	}

	const lookup = {};
	components.forEach((component) => {
		const path = `./${component.name}.${component.type}`;
		lookup[path] = component;
	});

	let dom;
	let error;

	try {
		dom = await get_bundle(uid, 'client', cached.dom, lookup);
		if (dom.error) {
			throw dom.error;
		}

		cached.dom = dom.cache;

		const dom_result = (
			await dom.bundle.generate({
				format: 'es',
				sourcemap: true
			})
		).output[0];

		const ssr = false // TODO how can we do SSR?
			? await get_bundle(uid, 'ssr', cached.ssr, lookup)
			: null;

		if (ssr) {
			cached.ssr = ssr.cache;
			if (ssr.error) {
				throw ssr.error;
			}
		}

		const ssr_result = ssr
			? (
					await ssr.bundle.generate({
						format: 'es',
						sourcemap: true
					})
				).output[0]
			: null;

		return {
			uid,
			dom: dom_result,
			ssr: ssr_result,
			imports: dom.imports,
			warnings: dom.warnings,
			error: null
		};
	} catch (err) {
		if (is_abort(err)) return { error: ABORT };

		console.error(err);

		const e = error || err;
		delete e.toString;

		return {
			uid,
			dom: null,
			ssr: null,
			imports: null,
			warnings: dom?.warnings || [],
			error: Object.assign({}, e, {
				message: e.message || String(e),
				stack: e.stack
			})
		};
	}
}

function resolve_local_import(importee, importer, lookup) {
	if (!is_local_importer(importer, lookup)) return null;

	const candidates = [];
	const base = importer ? importer.slice(0, importer.lastIndexOf('/') + 1) : './';
	const resolved = importee.startsWith('.') ? normalize_local_path(`${base}${importee}`) : importee;

	candidates.push(resolved);
	candidates.push(`${resolved}.svelte`, `${resolved}.js`, `${resolved}.json`, `${resolved}.glsl`);
	candidates.push(`${resolved}/index.svelte`, `${resolved}/index.js`);

	return candidates.find((candidate) => candidate in lookup) || null;
}

function is_local_importer(importer, lookup) {
	return !importer || importer in lookup;
}

function normalize_local_path(path) {
	const stack = [];

	for (const part of path.split('/')) {
		if (!part || part === '.') continue;
		if (part === '..') stack.pop();
		else stack.push(part);
	}

	return `./${stack.join('/')}`;
}

function external(id) {
	return { id, external: true };
}

function get_svelte_runtime_url(importee) {
	const subpath = importee === 'svelte' ? '' : importee.slice('svelte'.length);
	const base = svelteUrl.includes('esm.sh')
		? svelteUrl
		: `https://esm.sh/svelte@${compiler.VERSION}`;
	return with_bundle_query(`${base}${subpath}`);
}

function get_package_module_url(importee) {
	const base = packagesUrl.includes('esm.sh') ? packagesUrl : 'https://esm.sh';
	return `${base}/${importee}`;
}

function with_bundle_query(url) {
	return url.includes('?') ? `${url}&bundle` : `${url}?bundle`;
}

function get_package_name(specifier) {
	const parts = specifier.split('/');

	return specifier[0] === '@' ? `${parts[0]}/${parts[1]}` : parts[0];
}
