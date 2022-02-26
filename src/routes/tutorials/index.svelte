<script>
	import tutorials from './tutorials.json';
</script>

<svelte:head>
	<title>Tutorials</title>
</svelte:head>

<div class="max-w-7xl m-auto pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
	<div>
		<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Tutorials</h2>
	</div>
	<div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
		<div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
			{#each tutorials as { tag, title, preview, url }}
				<div>
					<div>
						<a href={url} class="inline-block">
							<span
								class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800"
							>
								{tag}
							</span>
						</a>
					</div>
					<a href={url} class="block mt-4">
						<p class="text-xl font-semibold text-gray-900">{title}</p>
						<p class="mt-3 text-base text-gray-500">
							{preview}
						</p>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
