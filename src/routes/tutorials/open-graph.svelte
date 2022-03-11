<script>
	let w = 1200;
	let h = 630;
	let title = 'Open Graph Tutorial';
	let name = 'Svelte Board';
	let subtitle = 'Using open graph';
	let url = 'https://svelteboard.com/tutorials/open-graph';
	let image = '';
	let description = 'REPL';
	let type = 'Article';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content="Open Graph Tutorial" />
</svelte:head>

<div class="max-w-4xl m-auto mt-4 md:mt-20 p-4 text-center">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">Open Graph</h1>
</div>
<div class="2xl:flex">
	<div class="max-w-2xl w-full m-auto">
		<div class="mx-4 my-8">
			<div class="w-[506px] max-w-full h-[374px] border border-[#cfd9de] rounded-lg overflow-clip">
				{#if !image}
					<div class="h-[264px] bg-slate-900 overflow-clip relative">
						<div
							class="absolute bg-gradient-to-r from-slate-50/50 to-slate-900 w-full h-[1px] top-20"
						/>
						<div
							class="absolute bg-gradient-to-r from-slate-50/40 to-slate-900 w-full h-[1px] bottom-20"
						/>

						<div
							class="absolute bg-gradient-to-r from-slate-50/60 to-slate-900  w-full h-[1px] left-44 rotate-90"
						/>
						<div
							class="absolute bg-gradient-to-r from-slate-50/80 to-slate-900 w-full h-[1px] -left-44 rotate-90"
						/>
						<div
							class="absolute bg-gradient-to-r from-slate-50/40 to-slate-900  w-full h-[1px] left-60 rotate-90"
						/>
						<div
							class="absolute bg-gradient-to-r from-slate-50/70 to-slate-900 w-full h-[1px] -left-60 rotate-90"
						/>

						<div class="absolute bg-blue-500/70 w-full h-2 bottom-4 border-b border-blue-400" />
						<div class="absolute bg-blue-600/60 w-full h-8 blur-lg bottom-0" />
						<div class="absolute bg-blue-700/40 w-full h-12 blur-lg bottom-0" />

						<div class="flex flex-col justify-center items-center h-full">
							<h1
								class="text-4xl tracking-tight font-extrabold text-white outline-none"
								contenteditable="true"
								bind:textContent={title}
							>
								{title}
							</h1>
							<h4
								class="text-xl text-slate-100 outline-none"
								contenteditable="true"
								bind:textContent={subtitle}
							>
								{subtitle}
							</h4>
						</div>
					</div>
				{:else}
					<div style="background-image:url({image})" class="h-[264px] bg-cover" />
				{/if}

				<div class="p-[12px]">
					<div class="text-[#536471]">
						{url.match(/^(?:https?:\/\/)?([^@\/\n]+@)?(?<site>(?:www\.)?([^:\/?\n]+))/)[2]}
					</div>
					<div
						class="text-[#0F1419] outline-none"
						contenteditable="true"
						bind:textContent={title}
					/>
					<div
						class="text-[#536471] outline-none"
						contenteditable="true"
						bind:textContent={description}
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="grow space-y-6 bg-slate-50 max-w-3xl px-10 py-6 border m-auto">
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
		<div
			class="2xl:grid 2xl:grid-cols-5 2xl:gap-4 2xl:items-start sm:border-t sm:border-slate-200 sm:pt-5"
		>
			<label for="Image" class="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2">
				Image
			</label>
			<div class="mt-1 sm:mt-0 2xl:col-span-4">
				<input
					type="text"
					name="image"
					bind:value={image}
					placeholder="Image URL"
					class="max-w-2xl block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 2xl:max-w-sm 2xl:text-sm border-slate-300 rounded-md"
				/>
			</div>
		</div>

		<div
			class="2xl:grid 2xl:grid-cols-5 2xl:gap-4 2xl:items-start sm:border-t sm:border-slate-200 sm:pt-5"
		>
			<label for="type" class="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2">
				Type
			</label>
			<div class="mt-1 sm:mt-0 2xl:col-span-4">
				<input
					type="text"
					name="Type"
					bind:value={type}
					class="max-w-2xl block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 2xl:max-w-sm 2xl:text-sm border-slate-300 rounded-md"
				/>
			</div>
		</div>
	</div>
</div>
<div class="max-w-4xl m-auto mt-4 md:mt-20 p-4 break-all">
	<h4 class="text-2xl tracking-tight font-extrabold text-slate-900">Result</h4>
	<p>
		Put this in your <span class="text-white bg-slate-900 p-1 rounded font-mono"
			>{`<svelte:head>`}</span
		>
	</p>
	<div class="bg-slate-900 p-4 text-[#cbd5e1] font-mono rounded-md shadow-xl mt-4">
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:title"</span
		>
		content=<span class="text-[#7dd3fc]">"{title}"</span> /> <br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:site_name"</span
		>
		content=<span class="text-[#7dd3fc]">"{name}"</span> /><br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:url"</span
		>
		content=<span class="text-[#7dd3fc]">"{url}"</span> /><br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:description"</span
		>
		content="{description}" /><br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:type"</span
		>
		content=<span class="text-[#7dd3fc]">"{type}"</span> /><br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:image"</span
		>
		content=<span class="text-[#7dd3fc]">"{image || 'https://yourwebsite.com/yourimage.jpg'}"</span>
		/><br />
		<span class="text-[#f472b6]">{`<`}meta</span> name=<span class="text-[#7dd3fc]"
			>"twitter:card"</span
		>
		content=<span class="text-[#7dd3fc]">"summary_large_image"</span>
		/>
	</div>
</div>

<div class="prose prose-slate max-w-3xl m-auto mb-32">
	<h3>More Reading</h3>
	<ul>
		<a href="https://kit.svelte.dev/docs/seo" target="_blank">
			<li>SvelteKit SEO</li>
		</a>
		<a
			href="https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/"
			target="_blank"
		>
			<li>What is Open Graph and how can I use it for my website?</li>
		</a>

		<a href="https://ogp.me/" target="_blank">
			<li>Open Graph Protocol</li>
		</a>
		<a
			href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started"
			target="_blank"
		>
			<li>Twitter Card Meta Data</li>
		</a>
		<a href="https://cards-dev.twitter.com/validator" target="_blank">
			<li>Twitter Validator</li>
		</a>
		<a href="https://developers.facebook.com/tools/debug/" target="_blank">
			<li>Facebook Validator</li>
		</a>
		<a
			href="https://www.pinterest.com/login/?next=http%3A%2F%2Fdevelopers.pinterest.com%2Ftools%2Furl-debugger%2F"
			target="_blank"
		>
			<li>Pinterest Validator</li>
		</a>
	</ul>
</div>
