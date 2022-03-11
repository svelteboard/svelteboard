<script>
	import * as htmlToImage from 'html-to-image';
	import { toPng } from 'html-to-image';

	let w = 1200;
	let h = 630;
	let src, image;
	let title = 'Color Experiment';
	let name = 'Svelte Board';
	let subtitle = 'Using Mix Blend to Fine Tune Your Color Pallet';
	let url = 'https://svelteboard.com/tutorials/open-graph';
	let description = 'REPL';
	let type = 'Article';
	async function generateImage() {
		src = await toPng(image);
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content="Open Graph Tutorial" />
</svelte:head>

<div class="max-w-4xl m-auto mt-4 md:mt-20 p-4 text-center">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">HTML to Image</h1>
</div>
<div>
	<div class="grow max-w-3xl  m-auto">
		<div class="mx-4 space-y-6 bg-slate-50 border px-10 py-6">
			<div class="2xl:grid 2xl:grid-cols-5 2xl:gap-4 2xl:items-start 2xl:pt-5">
				<label for="title" class="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2">
					Title
				</label>
				<div class="mt-1 sm:mt-0 2xl:col-span-4">
					<input
						type="text"
						name="title"
						placeholder="Enter Title"
						bind:value={title}
						class="max-w-2xl block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 2xl:max-w-sm 2xl:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>
			<div
				class="2xl:grid 2xl:grid-cols-5 2xl:gap-4 2xl:items-start sm:border-t sm:border-slate-200 sm:pt-5"
			>
				<label for="name" class="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2">
					Site Name
				</label>
				<div class="mt-1 sm:mt-0 2xl:col-span-4">
					<input
						type="text"
						name="name"
						placeholder="Enter Title"
						bind:value={name}
						class="max-w-2xl block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 2xl:max-w-sm 2xl:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>
			<div
				class="2xl:grid 2xl:grid-cols-5 2xl:gap-4 2xl:items-start sm:border-t sm:border-slate-200 sm:pt-5"
			>
				<label for="url" class="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2">
					URL
				</label>
				<div class="mt-1 sm:mt-0 2xl:col-span-4">
					<input
						type="text"
						name="url"
						placeholder="Enter Title"
						bind:value={url}
						class="max-w-2xl block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 2xl:max-w-sm 2xl:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>
			<div
				class="2xl:grid 2xl:grid-cols-5 2xl:gap-4 2xl:items-start sm:border-t sm:border-slate-200 sm:pt-5"
			>
				<label for="description" class="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2">
					Description
				</label>
				<div class="mt-1 sm:mt-0 2xl:col-span-4">
					<textarea
						type="text"
						name="description"
						bind:value={description}
						placeholder="Enter Description"
						class="max-w-2xl block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 2xl:max-w-sm 2xl:text-sm border-slate-300 rounded-md"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="m-auto max-w-full">
	<div
		class="bg-slate-900 overflow-clip relative z-0 w-[1200px] h-[630px] m-auto mt-16"
		bind:this={image}
	>
		<div class="absolute bg-gradient-to-r from-slate-50/50 to-slate-900 w-full h-[1px] top-20" />
		<div class="absolute bg-gradient-to-r from-slate-50/40 to-slate-900 w-full h-[1px] bottom-20" />

		<div
			class="absolute bg-gradient-to-r from-slate-50/60 to-slate-900  w-full h-[1px] left-[520px] rotate-90"
		/>
		<div
			class="absolute bg-gradient-to-r from-slate-50/80 to-slate-900 w-full h-[1px] -left-[520px] rotate-90"
		/>
		<div
			class="absolute bg-gradient-to-r from-slate-50/40 to-slate-900  w-full h-[1px] left-[480px] rotate-90"
		/>
		<div
			class="absolute bg-gradient-to-r from-slate-50/70 to-slate-900 w-full h-[1px] -left-[480px] rotate-90"
		/>
		<div
			class="absolute bg-gradient-to-r from-slate-50/10 to-slate-900  w-full h-[1px] left-[400px] rotate-90"
		/>
		<div
			class="absolute bg-gradient-to-r from-slate-50/30 to-slate-900 w-full h-[1px] -left-[400px] rotate-90"
		/>

		<div class="absolute bg-blue-500/70 w-full h-2 bottom-4 border-b border-blue-400" />
		<div class="absolute bg-blue-600/60 w-full h-8 blur-lg bottom-0" />
		<div class="absolute bg-blue-700/40 w-full h-12 blur-lg bottom-0" />

		<div class="flex flex-col justify-center items-center h-full z-10">
			<h1
				class="text-8xl tracking-tight font-extrabold text-white outline-none z-10"
				contenteditable="true"
				bind:textContent={title}
			>
				{title}
			</h1>
			<h4
				class="text-2xl my-2 text-slate-100 outline-none z-10"
				contenteditable="true"
				bind:textContent={subtitle}
			>
				{subtitle}
			</h4>
		</div>
	</div>
</div>

<button on:click={generateImage} class="m-auto block my-32 border py-4 px-8 bg-blue-50 rounded-lg"
	>Generate Image</button
>

{#if src}
	{src}
	<img {src} alt={title} />
{/if}
