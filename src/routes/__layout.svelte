<script>
	import '../app.css';
	import { desktopMenu } from '$lib/stores';
	let mobileMenu = false;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap" rel="stylesheet" />
</svelte:head>
<button on:click={() => ($desktopMenu = true)} class="m-2 fixed z-30 left-0 top-0 hidden lg:block">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="w-10 h-10 text-slate-500 hover:text-slate-500 animate-all backdrop-blur-sm bg-slate-200/70 hover:bg-slate-200 p-2 rounded-lg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M13 5l7 7-7 7M5 5l7 7-7 7"
		/>
	</svg>
</button>

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

<div class="flex h-full min-h-screen w-full">
	<div
		on:click={() => (mobileMenu = false)}
		class="bg-slate-900/20 backdrop-blur-sm w-full h-full z-20 absolute transition-all duration-750 lg:hidden {mobileMenu
			? 'block opacity-100'
			: 'hidden opacity-0'} "
	/>
	<nav
		class="{mobileMenu ? 'block' : 'hidden'} {$desktopMenu
			? 'lg:ml-0 2xl:ml-0'
			: 'lg:-ml-64 2xl:-ml-72'} group lg:block fixed top-0 left-0 z-30 h-full max-h-screen min-h-screen flex-none overflow-y-scroll border-r border-slate-100 pb-10 transition-all duration-150 ease-out sm:pb-0 bg-slate-50 w-full max-w-[285px] lg:w-64 2xl:w-72 b-r-8"
	>
		<button
			on:click={() => (mobileMenu = false)}
			class="m-2 absolute z-30 hover:bg-slate-200 p-2 rounded-lg lg:hidden mt-4"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 hover:text-slate-700"
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

		<button
			on:click={() => ($desktopMenu = false)}
			class="m-2 absolute z-30 right-0 hidden mt-4 group-hover:lg:block"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-10 h-10 text-slate-400 hover:text-slate-500 animate-all hover:bg-slate-200 p-2 rounded-lg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
				/>
			</svg>
		</button>
		<div class="relative w-12 h-12 rounded-lg shadow-2xl m-auto mt-4 overflow-hidden">
			<a href="/">
				<img
					class="absolute inset-0 w-full h-full object-cover"
					src="/svelteboard-logo.png"
					alt=""
				/></a
			>
		</div>

		<ul class="space-y-1 p-4 2xl:text-xl font-normal">
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 rounded-md group">
				<a href="/tutorials" class="flex w-full p-2">
					<span class="flex items-center justify-center mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 hover:text-slate-700"
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
					<span class="flex-1 text-slate-700 hover:text-slate-900 py-1"> Tutorials </span>
				</a>
			</li>
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 rounded-md group">
				<a href="/snippets" class="flex w-full p-2">
					<span class="flex items-center justify-center mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 hover:text-slate-700"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
							/>
						</svg>
					</span><span class="flex-1 text-slate-700 hover:text-slate-900 py-1">Code Snippets </span>
				</a>
			</li>

			<li class="flex items-stretch space-x-1 hover:bg-slate-200 rounded-md group">
				<a href="/repl" class="flex w-full p-2">
					<span class="flex items-center justify-center mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 hover:text-slate-700"
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
					</span><span class="flex-1 text-slate-700 hover:text-slate-900 py-1 ml-1">REPL</span>
				</a>
			</li>
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 rounded-md group">
				<a href="/tools" class="flex w-full p-2">
					<span class="flex items-center justify-center mr-2">
						<svg
							viewBox="0 0 24 24"
							class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 hover:text-slate-700"
							stroke="currentColor"
							stroke-width="1.5"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path
								d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
							/></svg
						>
					</span><span class="flex-1 text-slate-700 hover:text-slate-900 py-1 ml-1">Tools</span>
				</a>
			</li>
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 rounded-md group">
				<a href="/contact" class="flex w-full p-2">
					<span class="flex items-center justify-center mr-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 hover:text-slate-700"
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
					</span><span class="flex-1 text-slate-700 hover:text-slate-900 py-1 ml-1"
						>Ask a Question</span
					>
				</a>
			</li>
			<li class="flex items-stretch space-x-1 hover:bg-slate-200 rounded-md group">
				<a
					href="https://github.com/svelteboard/svelteboard"
					target="_blank"
					class="flex w-full p-2"
				>
					<span class="flex items-center justify-center mr-2">
						<svg
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-6 w-6 2xl:h-8 2xl:w-8 2xl:p-1 text-slate-500 hover:text-slate-700"
							><path
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							/></svg
						>
					</span><span class="flex-1 text-slate-700 hover:text-slate-900 py-1 ml-1">Github</span>
				</a>
			</li>
		</ul>
	</nav>

	<div class="w-full {$desktopMenu ? 'lg:pl-64 2xl:pl-72' : 'lg:pl-0 2xl:pl-0'} transition-all">
		<main>
			<slot />
		</main>
	</div>
</div>
