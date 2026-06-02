import * as compiler from 'svelte/compiler';

self.window = self; // egregious hack to get magic-string to work in a worker

let fulfil_ready;
const ready = new Promise((f) => {
	fulfil_ready = f;
});

self.addEventListener('message', async (event) => {
	switch (event.data.type) {
		case 'init':
			fulfil_ready();
			break;

		case 'compile':
			await ready;
			postMessage(compile(event.data));
			break;
	}
});

const common_options = {
	dev: false,
	css: 'external',
	generate: 'client',
	compatibility: {
		componentApi: 4
	}
};

function compile({ id, source, options, return_ast }) {
	try {
		const { js, css, ast } = compiler.compile(
			source,
			Object.assign({}, common_options, normalize_options(options))
		);

		return {
			id,
			result: {
				js: js.code,
				css:
					css?.code ||
					`/* Add a <sty` +
						`le> tag to see compiled CSS (The tailwind styles are using the CDN and won't show up here*/`,
				ast: return_ast ? ast : null
			}
		};
	} catch (err) {
		let message = `/* Error compiling component\n\n${err.message}`;
		if (err.frame) message += `\n${err.frame}`;
		message += `\n\n*/`;

		return {
			id,
			result: {
				js: message,
				css: message
			}
		};
	}
}

function normalize_options(options = {}) {
	const normalized = { ...options };

	if (normalized.generate === 'dom') normalized.generate = 'client';
	if (normalized.generate === 'ssr') normalized.generate = 'server';
	if (typeof normalized.css === 'boolean') normalized.css = normalized.css ? 'injected' : 'external';

	delete normalized.format;
	delete normalized.hydratable;
	delete normalized.legacy;

	normalized.compatibility = {
		componentApi: 4,
		...normalized.compatibility
	};

	return normalized;
}
