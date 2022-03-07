const pipedreamForm = import.meta.env.VITE_PIPEDREAM_CONTACT;

export async function post({ request }) {
	const res = await request.json();
	//const headers = new Headers();
	//	headers.append('Content-Type', 'application/json');
	corsHeaders = {
		'Content-Type': 'text/JSON',
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Methods': '*',
		'Access-Control-Allow-Origin': '*'
	};

	const options = {
		method: 'POST',
		headers: corsHeaders,
		mode: 'cors',
		body: JSON.stringify(res)
	};
	fetch('https://eo7kwhtkijw77n6.m.pipedream.net', options);

	return { body: { status: '200' } };
}
