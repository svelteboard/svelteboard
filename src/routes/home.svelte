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
					source: `<div class="mx-2">
	<div
		class="relative max-w-sm m-auto p-8 md:p-16 border-8 border-slate-800 text-slate-800 shadow-md hover:bg-green-900 hover:border-8 hover:border-orange-900 group transition-all"
	>
		<img
			class="mix-blend-overlay absolute inset-0 w-full h-full object-cover hidden group-hover:block"
			src="/felt.png"
			alt=""
		/>

		<h1 class="text-center text-2xl sm:text-5xl font-bold ">
			<span
				class="inline-block transition-all group-hover:text-blue-200 group-hover:-rotate-6 top-5"
				>S</span
			>
			<span
				class="inline-block transition-all group-hover:text-yellow-200 group-hover:-rotate-4 top-5"
				>V</span
			>
			<span class="inline-block transition-all group-hover:text-red-200 group-hover:-rotate-6 top-5"
				>E</span
			>
			<span
				class="inline-block transition-all group-hover:text-orange-200 group-hover:rotate-6 top-5"
				>L</span
			>
			<span
				class="inline-block transition-all group-hover:text-green-100 group-hover:rotate-6 top-5"
				>T</span
			>
			<span class="inline-block transition-all group-hover:text-white group-hover:rotate-12 top-5"
				>E</span
			><br /><span
				class="inline-block transition-all group-hover:text-red-200 group-hover:-rotate-4 top-5"
				>B</span
			>
			<span
				class="inline-block transition-all group-hover:text-green-50 group-hover:rotate-12 top-5"
				>O</span
			>
			<span
				class="inline-block transition-all group-hover:text-yellow-200 group-hover:-rotate-6 top-5"
				>A</span
			>
			<span class="inline-block transition-all group-hover:text-blue-200 group-hover:rotate-6 top-5"
				>R</span
			>
			<span
				class="inline-block transition-all group-hover:text-orange-200 group-hover:rotate-6 top-5"
				>D</span
			>
		</h1>

		<p class="text-lg md:text-xl text-center group-hover:text-green-50 pt-2">
			Tutorials, Code Snippets, <span class="sm:whitespace-nowrap">and Svmore coming soon!</span>
		</p>
	</div>
</div>
`
				}
			]
		});
	});
</script>

<h1 class="text-4xl font-bold max-w-5xl m-auto  py-12">Svelte Board</h1>
<div class="max-w-5xl m-auto h-96 border border-slate-200 shadow-xl rounded-lg overflow-clip">
	<Repl bind:this={repl} showAst />
</div>
