export default {
	name: 'json',
	transform: (code, id) => {
		if (!id.endsWith('.json')) return null;

		return {
			code: `export default ${code};`,
			map: null
		};
	}
};
