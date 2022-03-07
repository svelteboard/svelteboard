// export async function post({ request }) {
// 	const res = await request.json();
// 	//const headers = new Headers();
// 	//	headers.append('Content-Type', 'application/json');
// 	const corsHeaders = {
// 		'Content-Type': 'text/JSON',
// 		'Access-Control-Allow-Headers': '*',
// 		'Access-Control-Allow-Methods': 'POST',
// 		'Access-Control-Allow-Origin': '86400'
// 	};

// 	const options = {
// 		method: 'POST',
// 		headers: corsHeaders,
// 		body: JSON.stringify(res)
// 	};
// 	fetch('https://eo7kwhtkijw77n6.m.pipedream.net', options);

// 	return { body: { status: '200' } };
// }

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

	const pipedreamForm = import.meta.env.VITE_PIPEDREAM_CONTACT;

	const pipe = await fetch('https://eo7kwhtkijw77n6.m.pipedream.net', options);
	return { body: { status: '200' } };
}
