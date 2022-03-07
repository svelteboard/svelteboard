export async function post({ request }) {
	const res = await request.json();
	const corsHeaders = {
		'Content-Type': 'text/JSON',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Methods': 'POST',
		'Access-Control-Allow-Origin': '86400'
	};

	const options = {
		method: 'POST',
		headers: corsHeaders,
		body: JSON.stringify(res)
	};
	const pipedreamURL = import.meta.env.VITE_PIPEDREAM_CONTACT_URL;
	const pipe = await fetch(pipedreamURL, options);

	return { body: { status: '200', body: pipe.status } };
}
