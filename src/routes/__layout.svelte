<script>
	import '../app.css';
	let mobileMenu = false;
</script>

<div
	class="text-green-800 bg-green-50 shadow-sm p-2 m-2 fixed cursor-pointer z-30 rounded-full lg:hidden"
	on:click={() => (mobileMenu = true)}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>
</div>

<div class="relative flex h-full min-h-screen w-full">
	<nav
		class="{mobileMenu
			? 'block'
			: 'hidden'} lg:block absolute z-30 h-full max-h-screen min-h-screen w-3/4 flex-none transform overflow-y-auto border-r border-slate-150 bg-white pb-10 transition duration-200 ease-in-out dark:border-slate-800 dark:bg-slate-900 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-slate-50 lg:dark:bg-slate-900 2xl:w-72"
	>
		<button
			on:click={() => (mobileMenu = false)}
			class="m-2 absolute z-30 hover:bg-slate-200 p-2 rounded-md lg:hidden"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>

		<a href="/"
			><img alt="Svelte Board Logo" src="/felt.jpeg" class="h-12 w-12 rounded-md m-auto mt-4" /></a
		>
		<ul class="space-y-2 p-4">
			<li class="flex items-stretch space-x-1">
				<span class="flex items-center justify-center mr-1">
					<svg
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5"
						><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path
							d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
						/></svg
					></span
				>
				<span class="flex-1"> Tutorials </span>
			</li>
			<li class="flex items-stretch space-x-1">
				<span class="flex items-center justify-center mr-1"
					><svg
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-5 w-5"
						><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line
							x1="20"
							y1="4"
							x2="8.12"
							y2="15.88"
						/><line x1="14.47" y1="14.48" x2="20" y2="20" /><line
							x1="8.12"
							y1="8.12"
							x2="12"
							y2="12"
						/></svg
					>
				</span><span class="flex-1">Code Snippets </span>
			</li>
		</ul>
	</nav>

	<div class="w-full pt-8">
		<main class="pb-8 max-w-5xl m-auto">
			<slot />
		</main>
	</div>
</div>
