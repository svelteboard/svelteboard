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
<svelte:head>
	<title>Svelte Board</title>
	<meta property="og:title" content="Svelte Board" />
	<meta property="og:site_name" content="Svelte Board" />
	<meta property="og:url" content="https://svelteboard.com/" />
	<meta property="og:description" content="Svelte tutorials, code snippets and svmore. " />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://svelteboard.com/content/svelteboard.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="bg-white">
	<div class="py-32 max-w-4xl m-auto">
		<h1 class="text-center text-5xl lg:text-8xl px-2 font-semibold tracking-tighter text-slate-900">
			Svelte is the fastest way to ship your code.
		</h1>
		<p
			class="text-xl lg:text-2xl max-w-3xl m-auto mt-4 text-slate-800 px-4 text-center lg:text-left"
		>
			Our goal is to make shipping a little faster, easier, and svmore fun.
		</p>
	</div>
</div>

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
		<div
			class="absolute w-28 sm:w-40 h-20 sm:h-40 bg-yellow-600/80 blur-3xl -rotate-6 -left-4 top-28 sm:top-32 animate-glow"
		/>
		<div
			class="absolute w-28 sm:w-40 h-20 sm:h-40 bg-red-600/80 blur-3xl -rotate-6 -left-4 top-32 sm:top-52 animate-glow2"
		/>
		<div
			class="absolute w-40 h-40 bg-orange-600/70 blur-3xl -rotate-6 left-4 top-40 sm:top-48 animate-glow"
		/>
	</div>
	<div class="w-full relative">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-24 w-24 sm:h-60 sm:w-60 m-auto"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			style="transform: perspective(4cm) rotateX({rotateY * 7}deg) rotateY({rotateX * 30}deg);"
		>
			<path
				stroke="#f64c11"
				fill="#f79803"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
			/>
			<path
				on:mouseenter={() => (marshmallowBurnt = true)}
				stroke="#f9ca41dd"
				fill="#fafba4"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
			/>
		</svg>
	</div>

	<div class="max-w-full w-32 sm:w-60 m-auto  -mt-4 sm:-mt-8 left relative">
		<div
			class="bg-gradient-to-r from-yellow-900 to-yellow-800/90 rounded-md w-full h-3 sm:h-4 absolute -rotate-12"
		/>
		<div
			class="bg-gradient-to-r from-yellow-900 to-yellow-800/90 rounded-md w-full h-3 sm:h-4 absolute rotate-12"
		/>
	</div>
</div>

<style>
	.animate-glow {
		animation: glow 7s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
	.animate-glow2 {
		animation: glow 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
	@keyframes glow {
		0%,
		100% {
			opacity: 0.8;
		}
		50% {
			opacity: 0.2;
		}
	}
</style>
