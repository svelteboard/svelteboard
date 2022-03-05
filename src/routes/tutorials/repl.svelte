<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';

	let components = [
		{
			name: 'App',
			type: 'svelte',
			source: `<script>
let name = 'REPL'
<\/script>

<div class="m-auto max-w-lg p-4 text-xl">
	This {name} is a scratch pad that makes it easy to copy the static output of a the repl
<\/div>`
		}
	];

	function cleanInput(input) {
		const clean = input.reduce((total, curr) => {
			const { name, type, source } = curr;
			const sourceString = `\`${source.replaceAll('/', `\\/`).replaceAll('`', '\\`')}\``;
			total +=
				`{name: ${JSON.stringify(name)},\n` +
				`type: ${JSON.stringify(type)},\n` +
				`source: ${sourceString}\n}`;

			return `[${total}]`;
		}, '');
		return clean;
	}
	let repl;

	onMount(() => {
		repl.set({ components });
	});
</script>

<svelte:head>
	<title>REPL Scratchpad</title>
</svelte:head>

<div class="flex max-w-3xl m-auto mt-16">
	<h2 class="grow text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">
		REPL Scratchpad
	</h2>
	<button
		class="relative hover:bg-slate-100 rounded-lg"
		on:click={() => navigator.clipboard.writeText(cleanInput(components))}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-16 w-16 text-slate-500 hover:text-slate-800  p-2 hover:rotate-6 transition-all duration-250"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1"
				d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
			/>
		</svg>
	</button>
</div>
<div class="max-w-full m-auto h-[700px] border shadow-xl rounded-lg overflow-clip">
	<Repl bind:this={repl} on:change={(e) => (components = e.detail.components)} />
</div>

<div class="max-w-4xl m-auto mt-16">
	<h3 class="text-xl font-semibold">REPL JSON</h3>
	{cleanInput(components)}
</div>
