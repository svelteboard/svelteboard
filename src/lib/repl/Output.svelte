<script>
	export let compiled;
	let iframe;
	function update(code) {
		iframe.contentWindow.postMessage(code, '*');
	}
	$: iframe && compiled && update(compiled);
	const srcdoc = `
<!doctype html>
<html>
	<head>
		<script type="module">
			let c;
			function update(source) {
				const blob = new Blob([source], { type: 'text/javascript' });
				const url = URL.createObjectURL(blob);
				import(url).then(({ default: App }) => {
					if (c) c.$destroy();
					document.body.innerHTML = '';
					c = new App({ target: document.body })
				})
			}
			window.addEventListener('message', event => {
				update(event.data)
			}, false)
		<\/script>
		<script src="https://cdn-tailwindcss.vercel.app/?plugins=forms,typography,aspect-ratio,line-clamp"><\/script>
	</head>
	<body>	
	</body>
</html>
	`;
</script>

<section>
	<iframe title="Rendered REPL" bind:this={iframe} {srcdoc} />
</section>

<style>
	iframe {
		width: 100%;
		height: 100vh;
	}
</style>
