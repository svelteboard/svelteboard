<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';

	let repl;

	onMount(() => {
		repl.set({
			components: [
				{
					name: 'App',
					type: 'svelte',
					source:
						`<scr` +
						`ipt>
	let name = 'world';
</scr` +
						`ipt>

<h1 class="text-4xl font-black bg-slate-800 text-white max-w-sm text-center m-auto my-4 p-8 rounded-lg shadow-xl">Hello {name}!</h1>`
				}
			]
		});
	});
</script>

<main>
	<Repl bind:this={repl} showAst />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		height: 100vh;
	}
</style>
