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

<h1>Hello {name}!</h1>`
				}
			]
		});
	});
</script>

<div class="max-w-5xl m-auto h-96 border shadow-xl rounded-lg">
	<Repl bind:this={repl} showAst />
</div>
