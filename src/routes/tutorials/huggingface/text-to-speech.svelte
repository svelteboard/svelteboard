<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';

	let prompt =
		'This is a demo of text to speech using the Hugging Face Inference A.P.I. with Svelte. This is content editable by the way. Try changing the text and generating new audio.';
	let promise = generate_audio();
	let repl;

	let components = [
		{
			name: 'App',
			type: 'svelte',
			source: `<script>
let prompt =
		'This is a demo of text to speech using the Hugging Face Inference A.P.I. with Svelte. This is content editable by the way. Try changing the text and generating new audio.';
	let promise; \/\/=generate_audio(); \/\/you can generate right away by setting immediately.
	
	async function generate_audio() {
		const options = {
			method: 'POST',
			body: JSON.stringify(prompt)
		};
		const res = await fetch(
			'https:\/\/api-inference.huggingface.co\/models\/espnet\/kan-bayashi_ljspeech_joint_finetune_conformer_fastspeech2_hifigan',
			options
		);
		const array = await res.arrayBuffer();
		const blob = new Blob([array], { type: 'audio\/wav' });
		const url = URL.createObjectURL(blob);

		if (res.ok) {
			return url;
		} else {
			console.log(res);
			throw new Error(res.statusText);
		}
	}
	function handle_submit() {
		promise = generate_audio();
	}
<\/script>
<div class="max-w-4xl m-auto mt-20 p-4 text-center">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">
		Text to Speech with Hugging Face
	<\/h1>
<\/div>
<div class="max-w-2xl m-auto mx-4">
	<div
		class="p-4 prose prose-xl prose-slate shadow-md border mb-4 m-auto"
		contenteditable
		bind:textContent={prompt}
	\/>

	<button
		on:click={handle_submit}
		type="submit"
		class="float-right w-44 max-w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>Generate Audio<\/button
	>
<\/div>
{#if promise}
	{#await promise}
		<div class="max-w-3xl m-auto clear-both prose prose-xl prose-slate pt-8">
			<svg
				class="animate-spin h-8 w-8 p-1 text-slate-700 m-auto"
				xmlns="http:\/\/www.w3.org\/2000\/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" \/>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				\/>
			<\/svg>
		<\/div>
	{:then result}
		<div class="max-w-3xl m-auto clear-both prose prose-xl prose-slate pt-8 mx-4">
			<h4 class="block text-sm font-medium text-slate-800">Audio Output<\/h4>
			<audio controls src={result} \/>
		<\/div>
	{:catch error}
		<div class="max-w-2xl m-auto clear-both prose prose-xl prose-slate pt-8">
			<p class="text-red-600">{error}<\/p>
		<\/div>
	{\/await}
{\/if}`
		}
	];

	async function generate_audio() {
		const options = {
			method: 'POST',
			body: JSON.stringify(prompt)
		};
		const res = await fetch(
			'https://api-inference.huggingface.co/models/espnet/kan-bayashi_ljspeech_joint_finetune_conformer_fastspeech2_hifigan',
			options
		);
		const array = await res.arrayBuffer();
		const blob = new Blob([array], { type: 'audio/wav' });
		const url = URL.createObjectURL(blob);

		if (res.ok) {
			return url;
		} else {
			console.log(res);
			throw new Error(res.statusText);
		}
	}
	function handle_submit() {
		promise = generate_audio();
	}

	onMount(() => {
		repl.set({ components });
	});
</script>

<svelte:head>
	<title>Text to Speech with Hugging Face</title>
	<meta property="og:title" content="Text to Speech with Hugging Face" />
	<meta property="og:site_name" content="Svelte Board" />
	<meta
		property="og:description"
		content="Generate speech from text with the Hugging Face Inference API."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="/content/Text-to-Speech-with-Hugging-Face.png" />
</svelte:head>

<div class="max-w-4xl m-auto mt-20 p-4 text-center">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">
		Text to Speech with Hugging Face
	</h1>
</div>
<div class="max-w-2xl m-auto">
	<div
		class="p-4 prose prose-xl prose-slate shadow-md border mb-4 m-auto"
		contenteditable
		bind:textContent={prompt}
	/>

	<button
		on:click={handle_submit}
		type="submit"
		class="float-right w-44 max-w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>Generate Audio</button
	>
</div>
{#if promise}
	{#await promise}
		<div class="max-w-3xl m-auto clear-both prose prose-xl prose-slate pt-8">
			<svg
				class="animate-spin h-8 w-8 p-1 text-slate-700 m-auto"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		</div>
	{:then result}
		<div class="max-w-3xl m-auto clear-both prose prose-xl prose-slate pt-8">
			<h4 class="block text-sm font-medium text-slate-800">Audio Output</h4>
			<audio controls src={result} />
		</div>
	{:catch error}
		<div class="max-w-2xl m-auto clear-both prose prose-xl prose-slate pt-8">
			<p class="text-red-600">{error}</p>
		</div>
	{/await}
{/if}
<div class="max-w-3xl m-auto prose prose-slate clear-both pt-8 prose-a:text-blue-600">
	<p class="prose-xl">
		The Accelerated Inference API can be used for more than just text. It can also be used for Audio
		and Images. For media, the API returns an <a
			href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"
			target="_blank">Array Buffer</a
		>
		containing the audio data that can be turned into a
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob">Blob</a>, and then an
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL" target="_blank"
			>Object URL</a
		>
		that you can use as a src in a Audio element. Svelte makes life easier again with the
		<a href="https://svelte.dev/tutorial/await-blocks" target="_blank">await block</a> and
		<a href="https://svelte.dev/tutorial/contenteditable-bindings" target="_blank">bindings</a>! See
		the code below.
	</p>
	<h3>Model Spotlight:</h3>
	<p class="prose-xl">
		This Model is from <a href="https://huggingface.co/espnet" target="_blank">ESPnet</a> on
		<a
			target="_blank"
			href="https://huggingface.co/espnet/kan-bayashi_ljspeech_joint_finetune_conformer_fastspeech2_hifigan?text=Svelte+is+the+best%21"
			>Hugging Face</a
		>
	</p>
	<h3>More Reading</h3>
	<ul>
		<a href="https://api-inference.huggingface.co/docs/node/html/quicktour.html" target="_blank">
			<li>API Infrence Docs</li>
		</a>
		<a href="https://huggingface.co/models" target="_blank">
			<li>Hugging Face Models</li>
		</a>
		<a href="https://huggingface.co/spaces" target="_blank">
			<li>Spaces</li>
		</a>
		<a href="https://huggingface.co/docs/sagemaker/main" target="_blank">
			<li>Hugging Face on Sage Maker</li>
		</a>
		<a href="https://svelte.dev/tutorial/contenteditable-bindings" target="_blank">
			<li>Svelte Contenteditable Bindings</li>
		</a>

		<a
			href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer"
			target="_blank"
		>
			<li>Array Buffer</li>
		</a>
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/Blob" target="_blank">
			<li>Blob</li>
		</a>
		<a href="https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL" target="_blank">
			<li>Object URL</li>
		</a>
	</ul>
	<h3>Demo REPL below</h3>
</div>
<div class="max-w-full m-auto h-[700px] border shadow-xl rounded-lg overflow-clip mt-8">
	<Repl bind:this={repl} on:change={(e) => (components = e.detail.components)} />
</div>
