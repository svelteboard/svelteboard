<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';
	import tutorials from '../tutorials.json';
	let table = tutorials;
	let newRow = {
		tag: '',
		title: '',
		preview: '',
		url: '/'
	};
</script>

<div class="max-w-7xl m-auto mt-16">
	<div class="flex">
		<h2 class="grow text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">
			Table View
		</h2>
		<button
			class="relative hover:bg-slate-100 rounded-lg"
			on:click={() => navigator.clipboard.writeText(JSON.stringify(table))}
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

<style>
	td:empty:before {
		content: 'Type Something...';
		color: #94a3b8;
	}
</style>
