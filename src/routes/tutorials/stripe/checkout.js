export async function post({ request }) {
	const [errors, item] = await db.create(request);

	if (errors) {
		// return validation errors
		return {
			status: 400,
			body: { errors }
		};
	}

	return {
		status: 200,
		body: { hello: 'world' }
	};
}
