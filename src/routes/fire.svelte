<script>
	let rotateX, rotateY, innerHeight, innerWidth;
	let marshmallowBurnt = false;
	function handleMousemove(event) {
		rotateX = (event.clientX - innerWidth / 2) / innerWidth;
		rotateY = (event.clientY - innerHeight / 2) / innerHeight;
	}
</script>

<svelte:window
	bind:innerHeight
	bind:innerWidth
	on:mousemove={handleMousemove}
	on:dblclick={() => (marshmallowBurnt = false)}
/>

<div
	class="bg-slate-900 min-h-screen marshmallow"
	style="cursor: url('/content/{marshmallowBurnt ? 'burnt-' : ''}marshmallow.png'), auto;"
>
	<div class="relative z-0 h-72 sm:h-96 -mb-72 sm:-mb-96">
		<div class="w-full h-[325px] sm:h-[550px] absolute overflow-hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xmlns:svgjs="http://svgjs.dev/svgjs"
				viewBox="0 0 1700 700"
				width="1700"
				height="700"
				><defs
					><filter
						id="nnnoise-filter"
						x="-20%"
						y="-20%"
						width="140%"
						height="140%"
						filterUnits="objectBoundingBox"
						primitiveUnits="userSpaceOnUse"
						color-interpolation-filters="linearRGB"
					>
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.2"
							numOctaves="4"
							seed="15"
							stitchTiles="stitch"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							result="turbulence"
						/>
						<feSpecularLighting
							surfaceScale="38"
							specularConstant="0.8"
							specularExponent="20"
							lighting-color="hsl(0, 0%, 100%)"
							x="0%"
							y="0%"
							width="100%"
							height="100%"
							in="turbulence"
							result="specularLighting"
						>
							<feDistantLight azimuth="3" elevation="28" />
						</feSpecularLighting>
					</filter></defs
				><rect width="1700" height="700" fill="#0f172a" /><rect
					width="1700"
					height="700"
					fill="hsl(0, 0%, 100%)"
					filter="url(#nnnoise-filter)"
				/></svg
			>
		</div>
	</div>
	<h2
		class="text-center text-white text-3xl sm:text-8xl tracking-tighter font-semibold pt-20 -mb-52 z-10 relative"
	>
		Tutorials, <br />
		Tools and, <br /> Svmore.
	</h2>
	<div
		class="max-w-full w-40 m-auto relative h-72 z-20 -mb-8"
		style="transform: perspective(4cm) rotateX({rotateY * 9}deg) rotateY({rotateX * 20}deg);"
	>
		<div
			class="absolute w-28 sm:w-28 h-24 sm:h-48 bg-slate-700 -rotate-12 -left-16 blur-3xl animate-pulse"
		/>
		<div
			class="absolute w-28 sm:w-40 h-20 sm:h-40 bg-slate-700/70 top-20 sm:top-24 rotate-12 right-0 blur-3xl animate-pulse"
		/>
	</div>

	<div class="relative m-auto w-64 mt-72">
		<div
			class="bg-orange-900 w-64 h-12 rounded-2xl absolute -bottom-8 border border-amber-700 rotate-6"
		>
			<div class="w-56 h-px mt-2 bg-amber-700" />
			<div class="w-60 h-px mt-2 bg-amber-700" />
			<div class="w-60 h-px mt-2 bg-amber-700" />
			<div class="w-56 h-px mt-2 bg-amber-700" />
		</div>
		<div
			class="bg-orange-900 w-64 h-12 rounded-2xl absolute -bottom-8 border border-amber-700 -rotate-12"
		>
			<div class="w-6 h-12 bg-amber-800 border border-amber-700 absolute rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mt-2 -ml-1 mr-2 h-8 w-8 text-amber-700 rotate-[-48deg]"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
					/>
				</svg>
			</div>
			<div class="w-56 h-px mt-2 bg-amber-700" />
			<div class="w-60 h-px mt-2 bg-amber-700" />
			<div class="w-60 h-px mt-2 bg-amber-700" />
			<div class="w-56 h-px mt-2 bg-amber-700" />
		</div>

		<div
			class="campfire border-r-3 border-bottom-2 absolute bottom-0 rounded-b-full rounded-tl-full -rotate-45 w-64 h-64 bg-gradient-to-t from-red-700 to-red-900 shadow-1"
		/>
		<div
			class="absolute bottom-0 rounded-b-full rounded-tl-full -rotate-45 w-64 h-64 bg-gradient-to-t from-red-700 to-red-900 shadow-1 border-3xl"
		/>
		<div
			class="campfire border-r-3 border-bottom-2 absolute bottom-0 rounded-b-full rounded-tl-full left-12 -rotate-45 w-40 h-40 bg-orange-600 shadow-2"
		/>
		<div
			class="absolute bottom-0 rounded-b-full rounded-tl-full left-12 -rotate-45 w-40 h-40 bg-orange-600 shadow-2 blur-3xl"
		/>
		<div
			class="absolute bottom-20 rounded-b-full rounded-tl-full left-12 -rotate-45 w-40 h-40 bg-orange-600/50 shadow-2 blur-3xl animate-pulse"
		/>
		<div
			class="campfire border-r-3 border-bottom-2 absolute bottom-0 rounded-b-full rounded-tl-full left-20 -rotate-45 w-28 h-28 bg-amber-500 shadow-3"
		/>
		<div
			class="absolute bottom-8 rounded-b-full rounded-tl-full left-20 -rotate-45 w-28 h-28 bg-amber-500/50 shadow-3 blur-3xl animate-pulse"
		/>

		<div
			class="campfire border-r-3 border-bottom-2 absolute bottom-0 rounded-b-full rounded-tl-full left-24 -rotate-45 w-20 h-20 bg-yellow-50 shadow-4"
		/>
		<div
			on:mouseenter={() => (marshmallowBurnt = true)}
			class="absolute bottom-8 rounded-b-full rounded-tl-full left-24 -rotate-45 w-12 h-12 bg-yellow-50 shadow-4 blur-3xl animate-pulse"
		/>
	</div>
	<div class="max-w-4xl m-auto p-4 pt-20 sm:pt-4 pb-16">
		<h2 class="text-white text-2xl md:text-5xl font-semibold tracking-tighter">Tutorials</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<div
				class="group relative rounded-lg border-2 border-slate-300 bg-white/90 hover:bg-white backdrop-blur-sm px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-blue-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
			>
				<div class="hidden sm:block flex-shrink-0 bg-blue-200 p-2 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-blue-700 group-hover:rotate-6 transition-all"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
						/>
					</svg>
				</div>
				<div class="flex-1 min-w-0">
					<a href="/tutorials/stripe/checkout" class="focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true" />
						<p class="text-sm font-medium text-slate-900">Stripe Checkout Playground</p>
						<p class="text-sm text-slate-500 truncate">
							Stripe Playground to help you integrate payments.
						</p>
					</a>
				</div>
			</div>

			<div
				class="group relative rounded-lg border-2 border-slate-300 bg-white/90 hover:bg-white backdrop-blur-sm px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-blue-500 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
			>
				<div class="flex-shrink-0 bg-blue-200 p-2 rounded-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="hidden sm:block h-6 w-6 text-blue-700 group-hover:rotate-6 transition-all"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
						/>
					</svg>
				</div>
				<div class="flex-1 min-w-0">
					<a href="/tutorials/stripe/checkout" class="focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true" />
						<p class="text-sm font-medium text-slate-900">Stripe Checkout Playground</p>
						<p class="text-sm text-slate-500 truncate">
							Stripe Playground to help you integrate payments.
						</p>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
