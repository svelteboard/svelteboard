<script>
	let w = 1200;
	let h = 630;
	let title = 'Open Graph Tutorial';
	let name = 'Svelte Board';
	let subtitle = 'Using open graph with Svelte';
	let url = 'https://svelteboard.com/tutorials/open-graph';
	let image = '';
	let description =
		'Using Open Graph to make your links more shareable.';
	let type = 'Article';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content="Open Graph Tutorial" />
	<meta property="og:site_name" content="Svelte Board" />
	<meta property="og:url" content="https://svelteboard.com/tutorials/open-graph" />
	<meta
		property="og:description"
		content="Using Open Graph to make your links more shareable."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://svetlteboard.com/content/openGraph.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="max-w-4xl m-auto mt-4 md:mt-20 p-4 text-center">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900">Open Graph Introduction</h1>
</div>
<div class="2xl:flex">
	<div class="max-w-2xl w-full m-auto">
		<div class="mx-4 my-8">
			<div
				class="w-[506px] m-auto max-w-full h-[385px] border border-[#cfd9de] rounded-lg overflow-clip"
			>
				{#if !image}
					<div class="h-[264px] bg-slate-900 overflow-clip relative z-0">
						<div
							class="absolute bg-gradient-to-r from-slate-50/50 to-slate-900 w-full h-[1px] top-20"
						/>
						<div
							class="absolute bg-gradient-to-r from-slate-50/40 to-slate-900 w-full h-[1px] bottom-20"
						/>

						<div
							class="absolute bg-gradient-to-r from-slate-50/60 to-slate-900  w-[1px] h-full left-12"
						/>
						<div
							class="absolute bg-gradient-to-r from-slate-50/80 to-slate-900 w-[1px] h-full right-16"
						/>
						<div
							class="absolute bg-gradient-to-r from-slate-50/40 to-slate-900  w-[1px] h-full right-8"
						/>
						<div
							class="absolute bg-gradient-to-r from-slate-50/30 to-slate-900 w-[1px] h-full left-8"
						/>

						<div class="absolute bg-blue-500/70 w-full h-2 bottom-4 border-b border-blue-400" />
						<div class="absolute bg-blue-600/60 w-full h-8 blur-lg bottom-0" />
						<div class="absolute bg-blue-700/40 w-full h-12 blur-lg bottom-0" />

						<div class="flex flex-col justify-center items-center h-full z-10">
							<h1
								class="text-4xl tracking-tight font-extrabold text-white outline-none z-10"
								contenteditable="true"
								bind:textContent={title}
							>
								{title}
							</h1>
							<h4
								class="text-xl text-slate-100 outline-none z-10"
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
						class="text-[#0F1419] outline-none text-ellipsis max-w-full w-[504px] overflow-hidden whitespace-nowrap"
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
				class="2xl:grid 2xl:grid-cols-5 2xl:gap-4 2xl:items-start sm:border-t sm:border-slate-200 sm:pt-5 pb-4"
			>
				<label for="type" class="block text-sm font-medium text-slate-700 sm:mt-px sm:pt-2">
					Type
				</label>
				<div class="mt-1 sm:mt-0 2xl:col-span-4">
					<select
						bind:value={type}
						name="type"
						class="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-slate-300 rounded-md"
					>
						<option>Website</option>
						<option>Article</option>
						<option>Video</option>
					</select>
				</div>
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
		<span class="text-[#f472b6]">{'<'}title></span>{title}<span class="text-[#f472b6]"
			>{'<'}/title></span
		>
		<br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:title"</span
		>
		content=<span class="text-[#7dd3fc]">"{title}"</span> <span class="text-[#f472b6]">/></span>
		<br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:site_name"</span
		>
		content=<span class="text-[#7dd3fc]">"{name}"</span><span class="text-[#f472b6]">/></span>
		<br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:url"</span
		>
		content=<span class="text-[#7dd3fc]">"{url}"</span><span class="text-[#f472b6]">/></span>
		<br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:description"</span
		>
		content="{description}" <span class="text-[#f472b6]">/></span>
		<br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:type"</span
		>
		content=<span class="text-[#7dd3fc]">"{type.toLowerCase()}"</span>
		<span class="text-[#f472b6]">/></span>
		<br />
		<span class="text-[#f472b6]">{`<`}meta</span> property=<span class="text-[#7dd3fc]"
			>"og:image"</span
		>
		content=<span class="text-[#7dd3fc]">"{image || 'https://yourwebsite.com/yourimage.jpg'}"</span>
		<span class="text-[#f472b6]">/></span>
		<br />
		<span class="text-[#f472b6]">{`<`}meta</span> name=<span class="text-[#7dd3fc]"
			>"twitter:card"</span
		>
		content=<span class="text-[#7dd3fc]">"summary_large_image"</span>
		<span class="text-[#f472b6]">/></span>
	</div>
</div>
<div class="prose prose-slate max-w-3xl m-auto my-16 prose-xl prose-a:text-blue-600">
	<div class="mx-4">
		<h3 class="mb-0">og:title</h3>
		<p>
			The title of your page, content, object etc. as you would like for it to appear when
			displayed.
		</p>
		<h3 class="mb-0">og:site_name</h3>
		<p>The name of your site.</p>

		<h3 class="mb-0">og:url</h3>
		<p>This will be the URL that will be associated with your content ie the link.</p>

		<h3 class="mb-0">og:description</h3>
		<p>Around 200 characters is recommended for the description.</p>

		<h3 class="mb-0">og:type</h3>
		<p>
			There are <a href="https://ogp.me/#types" target="_blank">other types</a> besides article, website,
			and video.
		</p>
		<h3 class="mb-0">og:image</h3>
		<p>
			1200×630 px is the recommended size for this image. Use the absolute path rather than a
			relative path here.
		</p>
		<h3 class="mb-0">twitter:card</h3>
		<p>
			summary_large_image is the most common, but there are <a
				href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started"
				>other options</a
			>.
		</p>
	</div>
</div>

<div class="prose prose-slate max-w-3xl m-auto mb-32 prose-a:text-blue-600">
	<div class="mx-4">
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
</div>
