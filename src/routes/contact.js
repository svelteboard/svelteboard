const pipedreamForm = import.meta.env.VITE_PIPEDREAM_CONTACT;

export async function post({ request }) {
	const res = await request.json();
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');

	const options = {
		method: 'POST',
		headers,
		mode: 'cors',
		body: JSON.stringify(res)
	};
	fetch('https://eo7kwhtkijw77n6.m.pipedream.net', options);

	return { body: { status: '200' } };
}
