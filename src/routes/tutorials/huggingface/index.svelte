<script>
	//const huggingface_endpoint = 'https://api-inference.huggingface.co/models/';
	//let huggingface_model_id = 'gpt2';
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';

	let API_TOKEN;
	let model = 'GPT2';
	let prompt = 'Hello world!';
	let promise = generated_text();
	let repl;

	let components = [
		{
			name: 'App',
			type: 'svelte',
			source: `<script>
	let API_TOKEN;
	let model = 'GPT2';
	let prompt = 'Hello world!';
	let promise = generated_text();

	async function generated_text() {
		const headers = new Headers({ Authorization: \`Bearer \${API_TOKEN}\` });

		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify(prompt)
		};
		const res = await fetch(
			\`https:\/\/api-inference.huggingface.co\/models\/\${model.toLowerCase()}\`,
			options
		);
		const json = await res.json();
		if (res.ok) {
			return json;
		} else {
			throw new Error(json.error);
		}
	}
	function handle_submit() {
		promise = generated_text();
	}
<\/script>

<div class="max-w-2xl m-auto p-4 sm:p-8">
	<h2 class="text-slate-900 font-semibold text-2xl">Demo Time</h2>
	<div class="flex space-x-8 pb-8 pt-4">
		<button
			type="button"
			on:click={() => {
				model = 'distilgpt2';
				prompt = 'My name is Telemachus, and I like to';
			}}
			class="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>distilgpt2</button
		>
		<button
			type="button"
			on:click={() => {
				model = 'google/pegasus-xsum';
				prompt =
					'The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.';
			}}
			class="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>google/pegasus-xsum</button
		>
		<button
			type="button"
			on:click={() => {
				model = 'roberta-base';
				prompt = 'The goal of life is <mask>.';
			}}
			class="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>roberta-base</button
		>
	</div>
	<div class="sm:flex">
		<div class="sm:mr-4">
			<label for="Model" class="block text-sm font-medium text-slate-700">Model<\/label>
			<div class="mt-1">
				<input
					type="text"
					name="Model"
					bind:value={model}
					class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md text-slate-800"
				\/>
			<\/div>
		<\/div>
		<div class="grow">
			<label for="API Key" class="block text-sm font-medium text-slate-700"
				>API Key (<a target="_blank" href="https:\/\/huggingface.co\/join" class="text-blue-600"
					>Sign up<\/a
				>
				and
				<a class="text-blue-600" href="https:\/\/huggingface.co\/settings\/tokens" target="_blank"
					>get your API token<\/a
				>)
			<\/label>
			<div class="mt-1">
				<input
					type="text"
					name="API Key"
                    placeholder="hf_..."
					bind:value={API_TOKEN}
					class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md text-slate-800"
				\/>
			<\/div>
		<\/div>
	<\/div>
	<div class="my-4">
		<label for="API Key" class="block text-sm font-medium text-slate-700">Prompt<\/label>
		<div class="mt-1">
			<textarea
				type="text"
				name="Prompt"
				bind:value={prompt}
				class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md text-slate-800"
			\/>
		<\/div>
	<\/div>

	<button
		on:click={handle_submit}
		type="submit"
		class="float-right w-44 max-w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>Submit<\/button
	>
<\/div>
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
		<div class="max-w-3xl m-auto clear-both prose prose-xl prose-slate pt-8 px-2">
			{#if result[0].generated_text}
				<h4 class="block text-sm font-medium text-slate-700">Response</h4>
				{JSON.stringify(result[0].generated_text)}
			{:else}
				<h4 class="block text-sm font-medium text-slate-700">JSON Output</h4>
				{JSON.stringify(result)}
			{/if}
		</div>
	{:catch error}
		<div class="max-w-2xl m-auto clear-both prose prose-xl prose-slate pt-8 px-4">
			<p class="text-red-600">{error}</p>
		</div>
	{/await}`
		}
	];

	async function generated_text() {
		const headers = new Headers({ Authorization: `Bearer ${API_TOKEN}` });

		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify(prompt)
		};
		const res = await fetch(
			`https://api-inference.huggingface.co/models/${model.toLowerCase()}`,
			options
		);
		const json = await res.json();
		if (res.ok) {
			return json;
		} else {
			console.log(json.error);
			throw new Error(json.error);
		}
	}
	function handle_submit() {
		promise = generated_text();
	}

	onMount(() => {
		repl.set({ components });
	});
</script>

<svelte:head>
	<title>Introduction to the 🤗 Accelerated Inference API in Svelte</title>
	<meta
		property="og:title"
		content="Hugging Face is the easiest way to build, train, and deploy machine learning models."
	/>
	<meta property="og:site_name" content="Svelte Board" />
	<meta
		property="og:description"
		content="Generate speech from text with the Hugging Face Inference API."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://svelteboard.com/content/InferenceAPI.png" />
	<meta name="”twitter:card”" content="”summary”" />
</svelte:head>
<div class="max-w-4xl m-auto mt-20 p-4 text-center">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">
		Introduction to the 🤗 Accelerated Inference API in Svelte
	</h1>
</div>
<div class="max-w-3xl m-auto p-4 prose prose-xl prose-slate prose-a:text-blue-600">
	<p>
		Hugging Face is the easiest way to build, train, and deploy machine learning models. They have
		done some amazing work in NLP and making Machine Learning more accessible. If you haven't heard
		of them, check out <a href="https://huggingface.co/spaces/" target="_blank">Spaces</a>
		to see some of the awesome ML apps the community has made.
	</p>
	<p>
		This tutorial is a quick intro to using Hugging Face's
		<a href="https://api-inference.huggingface.co/docs/node/html/index.html" target="_blank"
			>Inference API</a
		>.
	</p>
	<p>
		Every request has to have a Model and a Prompt. The <a
			target="_blank"
			href="https://huggingface.co/settings/tokens">API Token</a
		>
		is optional, but it runs quicker with one, and lets you use a
		<a target="_blank" href="https://huggingface.co/platform">private model</a>.
	</p>
	<p>
		Each <a href="https://huggingface.co/models" target="_blank">Model</a> has its own endpoint, but
		the base URL is:
		<span class="whitespace-nowrap bg-slate-800 text-white p-3 font-mono text-sm rounded-md"
			>https://api-inference.huggingface.co/models</span
		>.<br /><br />
		The <b>{model}</b> Model endpoint would be:<br />
		<span class="whitespace-nowrap bg-slate-800 text-white p-3 font-mono text-sm rounded-md"
			>https://api-inference.huggingface.co/models/<span class="text-sky-300"
				>{model.toLowerCase()}</span
			></span
		>.
	</p>
	<p>
		Different models will use different JSON inputs/outputs. The demo below makes a simple POST
		request from the client, but in production you would want to put the call to Hugging Face from
		an <a target="_blank" href="https://kit.svelte.dev/docs/routing#endpoints">endpoint</a>. Svelte
		has a handy
		<a target="_blank" href="https://svelte.dev/tutorial/await-blocks">await block</a> that allows you
		to wait for async data directly in your markup.
	</p>
</div>

<div class="max-w-2xl m-auto">
	<h2 class="text-slate-900 font-semibold text-2xl">Demo Time</h2>
	<div class="flex space-x-8 pb-8 pt-4">
		<button
			type="button"
			on:click={() => {
				model = 'distilgpt2';
				prompt = 'My name is Telemachus, and I like to';
			}}
			class="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>distilgpt2</button
		>
		<button
			type="button"
			on:click={() => {
				model = 'google/pegasus-xsum';
				prompt =
					'The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930. It was the first structure to reach a height of 300 metres. Due to the addition of a broadcasting aerial at the top of the tower in 1957, it is now taller than the Chrysler Building by 5.2 metres (17 ft). Excluding transmitters, the Eiffel Tower is the second tallest free-standing structure in France after the Millau Viaduct.';
			}}
			class="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>google/pegasus-xsum</button
		>
		<button
			type="button"
			on:click={() => {
				model = 'roberta-base';
				prompt = 'The goal of life is <mask>.';
			}}
			class="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>roberta-base</button
		>
	</div>
	<div class="sm:flex">
		<div class="sm:mr-4">
			<label for="Model" class="block text-sm font-medium text-slate-700">Model</label>
			<div class="mt-1">
				<input
					type="text"
					name="Model"
					bind:value={model}
					class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md text-slate-800"
				/>
			</div>
		</div>
		<div class="grow">
			<label for="API Key" class="block text-sm font-medium text-slate-700"
				>API Key (<a class="text-blue-600" target="_blank" href="https://huggingface.co/join"
					>Sign up</a
				>
				and
				<a href="https://huggingface.co/settings/tokens" class="text-blue-600" target="_blank"
					>get your API token</a
				>)
			</label>
			<div class="mt-1">
				<input
					type="text"
					name="API Key"
					bind:value={API_TOKEN}
					placeholder="hf_..."
					class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md text-slate-800"
				/>
			</div>
		</div>
	</div>
	<div class="my-4">
		<label for="API Key" class="block text-sm font-medium text-slate-700">Prompt</label>
		<div class="mt-1">
			<textarea
				type="text"
				name="Prompt"
				bind:value={prompt}
				class="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-slate-300 rounded-md text-slate-800"
			/>
		</div>
	</div>

	<button
		on:click={handle_submit}
		type="submit"
		class="float-right w-44 max-w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>Submit</button
	>
</div>
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
		{#if result[0].generated_text}
			<h4 class="block text-sm font-medium text-slate-800">Response</h4>
			<p>{JSON.stringify(result[0].generated_text)}</p>
		{:else}
			<h4 class="block text-sm font-medium text-slate-800">JSON Output</h4>
			<p>{JSON.stringify(result)}</p>
		{/if}
	</div>
{:catch error}
	<div class="max-w-2xl m-auto clear-both prose prose-xl prose-slate pt-8">
		<p class="text-red-600">{error}</p>
	</div>
{/await}
<div class="max-w-3xl m-auto prose prose-slate clear-both pt-8 prose-a:text-blue-600">
	<h3>Next Steps</h3>
	<p class="prose-xl">
		Text Generation is just one use case for the API. It can also be used for <a
			target="_blank"
			href="https://huggingface.co/models?pipeline_tag=text-classification&sort=downloads"
			>Text Classification</a
		>,
		<a
			target="_blank"
			href="https://huggingface.co/models?pipeline_tag=feature-extraction&sort=downloads"
			>Feature Extraction</a
		>,
		<a
			target="_blank"
			href="https://huggingface.co/models?pipeline_tag=table-question-answering&sort=downloads"
			>Table Question Answering</a
		>,
		<a
			target="_blank"
			href="https://huggingface.co/models?pipeline_tag=summarization&sort=downloads"
			>Summarization</a
		>, and more. Check out the
		<a href="https://huggingface.co/course/chapter0/1">Hugging Face course</a> to go deeper into NLP.
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
		<a href="https://kit.svelte.dev/docs/routing#endpoints" target="_blank">
			<li>SvelteKit Endpoints</li>
		</a>
		<a href="https://www.youtube.com/watch?v=J5sJJr4cNWs" target="_blank">
			<li>SvelteKit Endpoint Video</li>
		</a>
		<a href="https://svelte.dev/tutorial/await-blocks" target="_blank">
			<li>Svelte Await</li>
		</a>
	</ul>
	<h3>Demo REPL below</h3>
</div>
<div class="max-w-full m-auto h-[700px] border shadow-xl rounded-lg overflow-clip mt-8">
	<Repl bind:this={repl} on:change={(e) => (components = e.detail.components)} />
</div>
