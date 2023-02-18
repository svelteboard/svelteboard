<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';
	import { toPng } from 'html-to-image';

	let src, image;
	let title = 'Color Experiment';
	let subtitle = 'Using Mix Blend to Fine Tune Your Color Palette';

	let repl;
	let components = [
		{
			name: 'App',
			type: 'svelte',
			source: `<script>
	import { toPng } from 'html-to-image';

	let src, image;
	let title = 'Color Experiment';
	let subtitle = 'Using Mix Blend to Fine Tune Your Color Palette';

	async function generateImage() {
		src = await toPng(image);
	}
<\/script>

<div class="max-w-4xl m-auto p-4 mt-16">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">HTML to Image<\/h1>
<\/div>
<div class="m-auto w-[500px]">
	<div class="w-[500px] h-[300px] bg-slate-900" bind:this={image}>
		<div class="bg-slate-900 relative z-0 w-[500px] h-[300px] m-auto">
			<div class="absolute bg-gradient-to-r from-slate-50\/50 to-slate-900 w-full h-[1px] top-20" \/>
			<div
				class="absolute bg-gradient-to-r from-slate-50\/40 to-slate-900 w-full h-[1px] bottom-20"
			\/>

			<div class="absolute bg-gradient-to-b from-slate-50\/60 to-slate-900 w-[1px] h-full left-0" \/>
			<div class="absolute bg-gradient-to-b from-slate-50\/80 to-slate-900 w-[1px] h-full left-16" \/>
			<div class="absolute bg-gradient-to-b from-slate-50\/40 to-slate-900 w-[1px] h-full left-32" \/>
			<div class="absolute bg-gradient-to-b from-slate-50\/70 to-slate-900 w-[1px] h-full left-64" \/>
			<div class="absolute bg-gradient-to-b from-slate-50\/10 to-slate-900 w-[1px] h-full left-48" \/>
			<div class="absolute bg-gradient-to-b from-slate-50\/30 to-slate-900 w-[1px] h-full left-96" \/>

			<div class="absolute bg-blue-500\/70 w-full h-2 bottom-4 border-b border-blue-400" \/>
			<div class="absolute bg-blue-600\/60 w-full h-8 blur-lg bottom-0" \/>
			<div class="absolute bg-blue-700\/40 w-full h-12 blur-lg bottom-0" \/>

			<div class="flex flex-col justify-center items-center h-[300px] z-10 w-full">
				<h1
					class="text-4xl tracking-tight font-extrabold text-white outline-none z-10 w-full text-center"
					contenteditable="true"
					bind:textContent={title}
				>
					{title}
				<\/h1>
				<h4
					class="text-xl my-2 text-slate-100 outline-none z-10 w-full text-center"
					contenteditable="true"
					bind:textContent={subtitle}
				>
					{subtitle}
				<\/h4>
			<\/div>
		<\/div>
	<\/div>
<\/div>

<button on:click={generateImage} class="m-auto block my-8 border py-4 px-8 bg-blue-50 rounded-lg"
	>Generate Image<\/button
>

{#if src}
	<div class="mb-32 m-auto block">
		<img {src} alt={title} class="m-auto" \/>
		<!-- {JSON.stringify(src)} -->
	<\/div>
{\/if}
`
		}
	];
	onMount(() => {
		repl.set({ components });
	});

	async function generateImage() {
		src = await toPng(image);
	}
</script>

<svelte:head>
	<title>HTML to Image</title>
	<meta property="og:title" content="HTML to Image" />
	<meta property="og:site_name" content="Svelte Board" />
	<meta property="og:url" content="https://svelteboard.com/tutorials/html-to-image" />
	<meta property="og:description" content="Make images on the fly with Svelte and HTML to Image." />
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://svelteboard.com/html-to-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="max-w-4xl m-auto p-4 mt-32 mb-12">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900 mb-4">HTML to Image</h1>
	<p class="text-xl text-slate-700">
		This is demo of <a
			href="https://github.com/bubkoo/html-to-image"
			target="_blank"
			class="text-blue-600">HTML to Image</a
		>
		and Tailwind to create images. If you want the image to be a specific size, the the element needs
		to be that height and width. Margins will throw that off, so put your margins on an element around
		it, if you need them.
		<br />
		<br />
		You can make it whatever size you need and use a transform to make it not overflow like this demo
		does, if you are feeling adventurous
	</p>
</div>
<div class="m-auto w-[1200px]">
	<div class="w-[1200px] h-[630px] bg-slate-900" bind:this={image}>
		<div class="bg-slate-900 relative z-0 w-[1200px] h-[630px] m-auto">
			<div class="absolute bg-gradient-to-r from-slate-50/50 to-slate-900 w-full h-[1px] top-20" />
			<div
				class="absolute bg-gradient-to-r from-slate-50/40 to-slate-900 w-full h-[1px] bottom-20"
			/>

			<div class="absolute bg-gradient-to-b from-slate-50/60 to-slate-900 w-[1px] h-full left-0" />
			<div class="absolute bg-gradient-to-b from-slate-50/80 to-slate-900 w-[1px] h-full left-16" />
			<div class="absolute bg-gradient-to-b from-slate-50/40 to-slate-900 w-[1px] h-full left-32" />
			<div class="absolute bg-gradient-to-b from-slate-50/70 to-slate-900 w-[1px] h-full left-64" />
			<div class="absolute bg-gradient-to-b from-slate-50/10 to-slate-900 w-[1px] h-full left-48" />
			<div class="absolute bg-gradient-to-b from-slate-50/30 to-slate-900 w-[1px] h-full left-96" />

			<div class="absolute bg-blue-500/70 w-full h-2 bottom-4 border-b border-blue-400" />
			<div class="absolute bg-blue-600/60 w-full h-8 blur-lg bottom-0" />
			<div class="absolute bg-blue-700/40 w-full h-12 blur-lg bottom-0" />

			<div class="flex flex-col justify-center items-center h-[630px] z-10 w-full">
				<h1
					class="text-9xl tracking-tight font-extrabold text-white outline-none z-10 w-full text-center"
					contenteditable="true"
					bind:textContent={title}
				>
					{title}
				</h1>
				<h4
					class="text-4xl my-2 text-slate-100 outline-none z-10 w-full text-center"
					contenteditable="true"
					bind:textContent={subtitle}
				>
					{subtitle}
				</h4>
			</div>
		</div>
	</div>
</div>

<button on:click={generateImage} class="m-auto block my-8 border py-4 px-8 bg-blue-50 rounded-lg"
	>Generate Image</button
>

{#if src}
	<div class="mb-32 m-auto block">
		<img {src} alt={title} class="m-auto" />
		<!-- {JSON.stringify(src)} -->
	</div>
{/if}

<div class="max-w-3xl m-auto prose prose-slate clear-both pt-8 pb-32 prose-a:text-blue-600">
	<h3>More Reading</h3>
	<ul>
		<a href="https://github.com/bubkoo/html-to-image#readme" target="_blank">
			<li>html-to-image Github</li>
		</a>
	</ul>
</div>

<div class="max-w-full m-auto h-[700px] border shadow-xl rounded-lg overflow-clip mt-8">
	<Repl bind:this={repl} on:change={(e) => (components = e.detail.components)} />
</div>
