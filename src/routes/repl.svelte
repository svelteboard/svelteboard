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
<div class="max-w-sm m-auto">
	<h1 class="text-4xl font-black bg-slate-800 text-white max-w-sm text-center m-auto my-4 p-8 rounded-lg shadow-xl">
		Hello {name}!
	</h1>
	<p class="p-2">
		This REPL is based on the <a href="https://svelte.dev/repl" class="text-blue-700 border-b-2 border-blue-700 font-semibold"target="_blank">Svelte REPL</a> and the theme is shamelessly stolen from <a href="https://tailwindcss.com/" class="text-blue-700 border-b-2 border-blue-700 font-semibold">Tailwind CSS</a>.
	</p>
</div>`
				}
			]
		});
	});
	let innerHeight;
</script>

<svelte:head>
	<title>REPL</title>
</svelte:head>

<svelte:window bind:innerHeight />

<div class="w-full overflow-hidden" style="height:{innerHeight}px">
	<Repl bind:this={repl} showAst plMenu={!$desktopMenu} {viewToggle} />
</div>
