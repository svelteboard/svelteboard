import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function POST({ request, fetch }) {
	const body = await request.json();
	const pipedreamURL = env.VITE_PIPEDREAM_CONTACT_URL;

	if (!pipedreamURL) {
		return json({ status: 'missing_config' }, { status: 202 });
	}

	const response = await fetch(pipedreamURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	return json({ status: response.status }, { status: response.ok ? 200 : 502 });
}
