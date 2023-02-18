<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';
	import tutorials from './tutorials.json';
	let table = tutorials;
	let newRow = {
		tag: '',
		title: '',
		preview: '',
		url: '/'
	};
	let repl;

	onMount(() => {
		repl.set({ components });
	});

	let components = [
		{
			name: 'App',
			type: 'svelte',
			source: `\<script\>
	
	let table = [
		{
			"tag": "SvelteKit",
			"title": "SvelteKit ❤️ Tailwind",
			"preview": "Getting started with SvelteKit and Tailwind.",
			"url": "\/"
		}
	];
	
	let newRow = {
		tag: '',
		title: '',
		preview: '',
		url: '\/'
	};
<\/script\>

<div class="max-w-4xl m-auto8 p-2">
	<div class="flex">
		<h2 class="grow text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">
			Simple Svelte Table
		<\/h2>
		<button
			class="relative hover:bg-green-100 rounded-lg flex items-center px-2 md:px-4 py-2 border bg-green-50 border-green-100 text-green-900 group"
			on:click={() => navigator.clipboard.writeText(JSON.stringify(table))}
		>
			<svg
				xmlns="http:\/\/www.w3.org\/2000\/svg"
				class="h-6 w-6 text-green-700 group-hover:text-green-800 group-hover:rotate-6 transition-all duration-250"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
				\/>
			<\/svg> <span class="hidden md:block">Copy Table as JSON<\/span>
		<\/button>
	<\/div>
	<table class="min-w-full divide-y divide-slate-200">
		<tr>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Title<\/th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Preview<\/th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Tag<\/th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>URL<\/th
			>
		<\/tr>
		{#each table as { title, preview, tag, url }}
			<tr>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					contenteditable="true"
					bind:innerHTML={title}>{title}<\/td
				>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					contenteditable="true"
					bind:innerHTML={preview}>{preview}<\/td
				>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					contenteditable="true"
					bind:innerHTML={tag}>{tag}<\/td
				>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					contenteditable="true"
					bind:innerHTML={url}>{url}<\/td
				>
			<\/tr>
		{\/each}
	<\/table>
	<button
		class="relative hover:bg-slate-100 rounded-lg float-right"
		on:click={() => {
			table.push(newRow);
			table = table;
		}}
	>
		<svg
			xmlns="http:\/\/www.w3.org\/2000\/svg"
			class="h-12 w-12 p-2 text-slate-700 hover:text-slate-800"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1"
				d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
			\/>
		<\/svg>
	<\/button>
<\/div>

\<style\>
	td:empty:before {
		content: 'Type Something...';
		color: #94a3b8;
	}
<\/style\>
`
		}
	];
</script>

<div class="max-w-7xl m-auto px-2 pt-8 md:pt-32 pb-16">
	<div class="flex">
		<h2 class="grow text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">
			Simple Svelte Table
		</h2>
		<button
			class="relative hover:bg-green-100 rounded-lg flex items-center px-4 py-2 border bg-green-50 border-green-100 text-green-900 group"
			on:click={() => navigator.clipboard.writeText(JSON.stringify(table))}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 text-green-700 group-hover:text-green-800 group-hover:rotate-6 transition-all duration-250"
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
			</svg> Copy Table as JSON
		</button>
	</div>
	<table class="min-w-full divide-y divide-slate-200">
		<tr>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Title</th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Preview</th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Tag</th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>URL</th
			>
		</tr>
		{#each table as { title, preview, tag, url }}
			<tr>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					contenteditable="true"
					bind:innerHTML={title}>{title}</td
				>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					contenteditable="true"
					bind:innerHTML={preview}>{preview}</td
				>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					contenteditable="true"
					bind:innerHTML={tag}>{tag}</td
				>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					contenteditable="true"
					bind:innerHTML={url}>{url}</td
				>
			</tr>
		{/each}
	</table>
	<button
		class="relative hover:bg-slate-100 rounded-lg float-right"
		on:click={() => {
			table.push(newRow);
			table = table;
		}}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-12 w-12 p-2 text-slate-700 hover:text-slate-800"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1"
				d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</button>
</div>
<div class="prose prose-xl m-auto py-8 lg:py-32">
	This is a simple Svelte Table component that uses an <span
		class="bg-slate-800 text-slate-50 p-2 rounded font-mono">{`{#each}`}</span
	> block to iterate over an array of objects (each object is a row). The clipboard button copies the
	table as JSON. The plus button adds a new row.
</div>

<div class="max-w-full m-auto h-[700px] border shadow-xl rounded-lg overflow-clip">
	<Repl bind:this={repl} on:change={(e) => (components = e.detail.components)} />
</div>

<style>
	td:empty:before {
		content: 'Type Something...';
		color: #94a3b8;
	}
</style>
