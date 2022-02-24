<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';
	import { desktopMenu } from '$lib/stores';

	let repl;
	let viewToggle = true;

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
	let innerHeight;
	let vh = innerHeight * 0.01;
</script>

<svelte:window bind:innerHeight />

<div class="full-height">
	<Repl bind:this={repl} showAst plMenu={!$desktopMenu} {viewToggle} />
</div>

<style>
	.full-height {
		min-height: 100vh;
		/* mobile viewport bug fix */
		min-height: -webkit-fill-available;
	}
</style>
