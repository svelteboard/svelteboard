const SVELTE_VERSION = '5.0.0-next.80';
const COMPILER_MODULE_URL = `https://esm.sh/svelte@${SVELTE_VERSION}/compiler?bundle&target=es2022`;

const headers = {
	'Access-Control-Allow-Headers': '*',
	'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
	'Access-Control-Allow-Origin': '*',
	'Cache-Control': 'public, max-age=300',
	'Content-Type': 'application/javascript; charset=utf-8'
};

function moduleSource() {
	return [
		`import * as svelte from ${JSON.stringify(COMPILER_MODULE_URL)};`,
		'globalThis.svelte = svelte;',
		'export default svelte;',
		`export * from ${JSON.stringify(COMPILER_MODULE_URL)};`
	].join('\n');
}

export default {
	fetch(request) {
		if (request.method === 'OPTIONS') {
			return new Response(null, { status: 204, headers });
		}

		if (request.method !== 'GET' && request.method !== 'HEAD') {
			return new Response('Method Not Allowed', {
				status: 405,
				headers: {
					...headers,
					'Content-Type': 'text/plain; charset=utf-8'
				}
			});
		}

		return new Response(request.method === 'HEAD' ? null : moduleSource(), { headers });
	}
};
