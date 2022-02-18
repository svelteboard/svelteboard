<script>
	import '../app.css';
	let mobileMenu = false;
</script>

<div
	class="bg-green-50 shadow-sm p-2 m-2 fixed cursor-pointer z-30 rounded-full lg:hidden"
	on:click={() => (mobileMenu = true)}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6 text-green-700"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="1.5"
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>
</div>

<div class="relative flex h-full min-h-screen w-full">
	<div
		on:click={() => (mobileMenu = false)}
		class="bg-slate-900/20 backdrop-blur-sm w-full h-full z-20 absolute animate-all duration-750 {mobileMenu
			? 'block opacity-100'
			: 'hidden opacity-0'} "
	/>
	<nav
		class="{mobileMenu
			? 'block'
			: 'hidden'} lg:block absolute top-0 z-30 h-full max-h-screen min-h-screen w-3/4 flex-none transform overflow-y-auto border-r border-slate-100 pb-10 transition duration-200 ease-in-out dark:border-slate-800 dark:bg-slate-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 bg-slate-50 lg:dark:bg-slate-900 2xl:w-72"
	>
		<button
			on:click={() => (mobileMenu = false)}
			class="m-2 absolute z-30 hover:bg-slate-200 p-2 rounded-lg lg:hidden mt-4"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 group-hover:text-slate-700"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<a href="/">
			<div
				class="bg-gradient-to-tr from-green-700 to-green-900 relative w-12 h-12 rounded-lg shadow-2xl m-auto mt-4 overflow-hidden"
			>
				<img
					class="mix-blend-overlay absolute inset-0 w-full h-full object-cover"
					src="/felt.png"
					alt=""
				/>
			</div>
		</a>
		<ul class="space-y-1 p-4 2xl:text-xl font-normal">
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 p-2 rounded-md group">
				<span class="flex items-center justify-center mr-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 group-hover:text-slate-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
						/>
					</svg>
				</span>
				<span class="flex-1 text-slate-700 group-hover:text-slate-900 py-1"> Tutorials </span>
			</li>
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 p-2 rounded-md group">
				<span class="flex items-center justify-center mr-2"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 group-hover:text-slate-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
				</span><span class="flex-1 text-slate-700 group-hover:text-slate-900 py-1"
					>Code Snippets
				</span>
			</li>
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 rounded-md group">
				<a href="/tools" class="flex w-full p-2">
					<span class="flex items-center justify-center mr-2">
						<svg
							viewBox="0 0 24 24"
							class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 group-hover:text-slate-700"
							stroke="currentColor"
							stroke-width="1.5"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path
								d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
							/></svg
						>
					</span><span class="flex-1 text-slate-700 group-hover:text-slate-900 py-1 ml-1"
						>Tools</span
					>
				</a>
			</li>
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 rounded-md group">
				<a href="/contact" class="flex w-full p-2">
					<span class="flex items-center justify-center mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 group-hover:text-slate-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</span><span class="flex-1 text-slate-700 group-hover:text-slate-900 py-1 ml-1"
						>Ask a Question</span
					>
				</a>
			</li>
		</ul>
	</nav>

	<div class="w-full">
		<main>
			<slot />
		</main>
	</div>
</div>
