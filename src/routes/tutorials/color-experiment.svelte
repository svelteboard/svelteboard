<script>
	let url = 'https://tailwind.com';
	let screen;
	let screenBottom = 0;
	let iframe;
	let phone = true;
	function updateURL(e) {
		if (e.key == 'Enter') {
			event.preventDefault();
			event.stopPropagation();
			iframe.src = url;
		}
	}
	//RESIZE
	let screenWidth;
	let w = 375;
	let width = '375';
	let h = 812;
	let height = '812';
	let s = 1;
	let scale = '100';
	$: s = parseInt(scale) / 100;
	$: w = parseInt(width);
	$: h = parseInt(height);
	let mouseDownX = false;
	let mouseDownY = false;
	function handleMousedownX() {
		mouseDownX = true;
	}
	function handleMousedownY() {
		mouseDownY = true;
	}
	function handleMouseup() {
		mouseDownX = false;
		mouseDownY = false;
	}
	function handleMousemove(e) {
		if (mouseDownX) {
			let screenRight = screen.getBoundingClientRect().right;
			let x = e.clientX;
			w = x - screenRight + w - 11;
			if (w < 500) {
				phone = true;
			} else {
				phone = false;
			}
			if (w < 278) {
				w = 278;
			}
			width = Math.round(w).toString();
		}
		if (mouseDownY) {
			let screenBottom = screen.getBoundingClientRect().bottom;
			let y = e.clientY;
			h = y - screenBottom + h + 30;
			if (h < 220) {
				h = 221;
			}
			height = Math.round(h).toString();
		}
	}
	function getMinutes() {
		let min = time.getMinutes();
		if (min < 10) {
			min = '0' + min;
		}
		return min;
	}
	let time = new Date();
	$: hours = time.getHours() % 12 || 12;
	$: minutes = getMinutes();
	function selectURL(el) {
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	}
	let desktopUrl, mobileUrl;
	let toggleMask = false;
	let color = '#F0FFFF';
	let opacity = 100;
	let mixBlend = 'multiply';
</script>

<svelte:window on:mouseup={handleMouseup} on:mousemove={handleMousemove} />

<svelte:head>
	<title>Color Experiment</title>
	<meta property="og:title" content="Color Experiment" />
	<meta property="og:site_name" content="Svelte Board" />
	<meta property="og:url" content="https://svelteboard.com/tutorials/color-experiment" />
	<meta property="og:description" content="Using Mix Blend to Fine Tune Your Color Pallet" />
	<meta property="og:type" content="article" />
	<meta
		property="og:image"
		content="https://svelteboard.com/content/colorExperimentMixBlendMode.png"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>
<div class="mx-auto max-w-3xl pt-16 pb-4">
	<h1 class="text-4xl font-semibold tracking-tight">Color Experiment</h1>
	<p class="text-xl text-slate-600 mt-2">
		This is a color experiement inspired by <a
			href="https://twitter.com/steveschoger"
			target="_blank"
			class="text-blue-600">Steve Schoger</a
		>.
	</p>
</div>

<div class="m-auto max-w-lg pb-16">
	<blockquote class="twitter-tweet">
		<p lang="en" dir="ltr">
			💡 An experiment you can try on your next web/app project to get a more interesting color
			palette is color grading your design.<br /><br />🧵
			<a href="https://t.co/CtGSMwbMtb">pic.twitter.com/CtGSMwbMtb</a>
		</p>
		&mdash; Steve Schoger (@steveschoger)<a
			href="https://twitter.com/steveschoger/status/1502318105124646924?ref_src=twsrc%5Etfw"
			>March 11, 2022</a
		>
	</blockquote>
</div>

<div class="max-w-xl m-auto">
	<div class="sm:flex space-x-4">
		<div class="flex space-x-4">
			<div class="flex items-center ml-4">
				<button
					on:click={() => (toggleMask = !toggleMask)}
					type="button"
					class="{toggleMask
						? 'bg-blue-600'
						: 'bg-slate-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					role="switch"
					aria-checked="false"
				>
					<span class="sr-only">Toggle Overlay</span>
					<span
						aria-hidden="true"
						class="{toggleMask
							? 'translate-x-5'
							: 'translate-x-0'} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
					/>
				</button>
				<span class="ml-3" id="annual-billing-label">
					<span class="text-sm font-medium text-slate-900">Toggle Overlay</span>
				</span>
			</div>
			<div class="flex items-center m">
				<input class="h-10 w-10 border" bind:value={color} type="color" />
				<span class="ml-3" id="annual-billing-label">
					<span class="text-sm font-medium text-slate-900">Overlay Color</span>
				</span>
			</div>
			<div class="flex items-center m">
				<input class="h-10 w-24 border" bind:value={opacity} type="number" />
				<span class="ml-3" id="annual-billing-label">
					<span class="text-sm font-medium text-slate-900">Opacity (%)</span>
				</span>
			</div>
		</div>
	</div>

	<div class="max-w-xs m-auto mt-4">
		<span class="text-sm font-medium text-slate-900">Mix Blend</span>
		<select
			bind:value={mixBlend}
			name="Mix Blend"
			class="max-w-lg block focus:ring-blue-500 focus:border-blue-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
		>
			<option>multiply</option>
			<option>screen</option>
			<option>overlay</option>
			<option>darken</option>
			<option>screen</option>
			<option>lighten</option>
			<option>color-dodge</option>
			<option>color-burn</option>
			<option>normal</option>
		</select>
	</div>
</div>
<div class="min-h-screen min-w-full">
	<div class="text-center text-xs leading pt-3 text-slate-900 dark:text-slate-400">
		<span contenteditable="true" bind:innerHTML={width} class="outline-none">Width</span> ×
		<span contenteditable="true" bind:innerHTML={height} class="outline-none">Height</span>
		<span
			>(<span contenteditable="true" bind:innerHTML={scale} class="outline-none">Scale</span
			>%)</span
		>
	</div>

	<div
		class="flex m-auto relative right-[-9px]"
		style="width:{w + 22}px;"
		bind:this={screen}
		id="screen"
	>
		<div
			class="border shadow-xl max-w-full m-auto mt-9 relative overflow-hidden {phone
				? 'rounded-[60px] border-[14px] border-black'
				: ''}"
			style="width:{w}px; height:{h}px"
		>
			<div>
				{#if phone == false}
					<div
						class="py-2.5 grid items-center px-4 gap-8 desktop"
						style="grid-template-columns: 7.125rem 1fr 7.125rem;"
					>
						<div class="flex items-center">
							<div class="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]" />
							<div class="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]" />
							<div class="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]" />
							<svg
								width="24"
								height="24"
								fill="none"
								class="ml-4 flex-none text-slate-400 dark:text-slate-500"
								><path
									d="m15 7-5 5 5 5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							><svg
								width="24"
								height="24"
								fill="none"
								class="ml-2 flex-none text-slate-400 dark:text-slate-500"
								><path
									d="m10 7 5 5-5 5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
						</div>
						<div>
							<div
								on:click={selectURL(desktopUrl)}
								class="bg-slate-100 rounded-md font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 mx-auto w-5/5 dark:bg-slate-800 dark:text-slate-500"
							>
								<svg
									viewBox="0 0 20 20"
									fill="currentColor"
									class="text-slate-300 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"
									><path
										fill-rule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clip-rule="evenodd"
									/></svg
								><span
									contenteditable="true"
									bind:this={desktopUrl}
									class="outline-none"
									on:keydown={updateURL}
									bind:innerHTML={url}
								/>
							</div>
						</div>
						<div class="flex">
							<svg width="24" height="24" fill="none" class="text-slate-400 dark:text-slate-500"
								><path
									d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
								/></svg
							>
						</div>
					</div>
				{/if}

				{#if phone}
					<div class="grid grid-cols-2 border-b border-slate-200 phone">
						<div class="font-black pt-4 px-4">{hours}:{minutes}</div>

						<div class="mr-5 mt-2 flex justify-end space-x-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-black"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-black"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
									clip-rule="evenodd"
								/>
							</svg>
							<svg
								class="h-5 w-5 text-black"
								fill="currentColor"
								version="1.0"
								xmlns="http://www.w3.org/2000/svg"
								width="512.000000pt"
								height="512.000000pt"
								viewBox="0 0 512.000000 512.000000"
								preserveAspectRatio="xMidYMid meet"
							>
								<g
									transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
									stroke="none"
								>
									<path
										d="M395 3949 c-172 -25 -329 -165 -376 -334 -21 -74 -21 -2036 0 -2110
50 -179 205 -310 396 -335 54 -7 722 -10 2085 -8 1998 3 2005 3 2061 24 128
47 220 127 275 239 45 93 54 161 54 443 l0 232 28 0 c72 1 167 80 190 159 16
53 16 549 0 602 -23 79 -118 158 -190 159 l-28 0 0 233 c0 281 -9 349 -54 442
-55 112 -147 192 -275 239 -56 21 -61 21 -2081 22 -1122 1 -2052 -2 -2085 -7z
m4120 -248 c51 -23 93 -65 116 -116 18 -38 19 -91 19 -1025 0 -933 -1 -987
-19 -1025 -10 -22 -33 -55 -51 -72 -70 -69 100 -64 -2155 -61 l-2040 3 -42 28
c-52 33 -88 86 -102 147 -14 62 -14 1898 0 1960 18 80 85 155 155 173 10 2
932 5 2049 6 1949 1 2032 0 2070 -18z"
									/>
									<path d="M470 2560 l0 -930 1975 0 1975 0 0 930 0 930 -1975 0 -1975 0 0 -930z" />
								</g>
							</svg>
						</div>
					</div>
				{/if}
				<div
					class="w-full h-full absolute pb-[50px] bg-transparent {mouseDownX
						? 'z-50'
						: 'z-0'} {mouseDownY ? 'z-50' : ''}"
				/>
				<div
					style="background-color:{color}; opacity:{opacity / 100}; mix-blend-mode:{mixBlend};"
					class="absolute mix-blend-darken inset-0 z-10 {toggleMask ? '' : 'hidden'}"
				/>
				<iframe
					src="https://tailwindcss.com/"
					bind:this={iframe}
					class="w-full h-full absolute pb-[50px]"
					title="Simulator"
				/>
			</div>
			{#if phone}
				<div
					class="absolute bottom-0 w-full pt-2 px-8 bg-slate-50/80 backdrop-blur-md rounded-br-[44px] rounded-bl-[44px] z-20"
				>
					<div
						on:click={selectURL(mobileUrl)}
						class="bg-slate-100 rounded-md font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 mx-auto w-5/5 dark:bg-slate-800 dark:text-slate-500"
					>
						<svg
							viewBox="0 0 20 20"
							fill="currentColor"
							class="text-slate-300 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"
							><path
								fill-rule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clip-rule="evenodd"
							/></svg
						><span
							contenteditable="true"
							class="outline-none"
							on:keydown={updateURL}
							bind:innerHTML={url}
							bind:this={mobileUrl}
						/>
					</div>
					<div class="grid grid-cols-5 place-items-center px-4 py-2 text-center">
						<svg
							width="24"
							height="24"
							fill="none"
							class="flex-none text-blue-400 dark:text-slate-500 m-auto"
							><path
								d="m15 7-5 5 5 5"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						><svg
							width="24"
							height="24"
							fill="none"
							class="flex-none text-blue-400 dark:text-slate-500"
							><path
								d="m10 7 5 5-5 5"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						>
						<svg
							width="24"
							height="24"
							viewBox="0 0 512 512"
							fill="none"
							class="flex-none text-blue-400 dark:text-slate-500 h-5 w-5 -mt-1"
						>
							<path
								d="M231 86v214c0 21.3-7.6 64 25 64s25-42.7 25-64V86c11.3 11.3 24.1 29.7 39 36.1a25.2 25.2 0 0 0 35.2-20.1c2.7-21.8-25.7-40.5-39.2-54l-33-33C276.2 8.2 269.3.5 259 0c-16-.7-24.4 9.4-35 20l-46 46c-8 8-18.8 16.2-20.9 28a25.2 25.2 0 0 0 30.9 29.5c8-1.9 13.4-8 19-13.5l24-24m165 129v247H116V215c15.2 0 38.1 4.3 52-2.3 17.2-8.2 18.8-33.3 3-43.8-7.6-5.2-17.3-3.9-26-3.9h-45c-12.4 0-24-.1-31 12-4.2 7.2-3 16-3 24v275c0 9-1.2 18.2 4.1 26 6.7 10 17.2 10 27.9 10h239c29 0 60.3 3.4 89-.2 29.5-3.7 20-52.3 20-72.8V199c0-9.3.9-18.3-5.7-25.8-7.4-8.6-17-8.2-27.3-8.2h-51c-8.8 0-17-.2-24 6.2a25.8 25.8 0 0 0 2 39.2c6.5 4.6 13.4 4.6 21 4.6h35z"
								fill="currentColor"
							/>
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 text-blue-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
							/>
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 text-blue-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
							/>
						</svg>
					</div>
				</div>
			{/if}
		</div>
		<div
			class="z-10 p-2 demo-sm:flex items-center pointer-events-auto cursor-ew-resize justify-self-start grid content-center"
			style="user-select: none; touch-action: pan-y; max-width:22px;"
			on:mousedown={handleMousedownX}
		>
			<div class="w-1.5 h-8 bg-slate-500/60 rounded-full cursor-ew-resize absolute" />
		</div>
	</div>
	<div class="flex m-auto" style="width:{w + 22}px;" bind:this={screen} id="screen">
		<div
			class="min-w-full z-10 p-2 flex items-center pointer-events-auto cursor-ns-resize justify-self-start grid content-center"
			style="user-select: none; touch-action: pan-x; max-width:22px;"
			on:mousedown={handleMousedownY}
		>
			<div class="w-8 h-1.5 bg-slate-500/60 rounded-full cursor-ns-resize m-auto z-50" />
		</div>
	</div>
</div>
<div class="max-w-3xl m-auto prose prose-slate clear-both pt-8 pb-32 prose-a:text-blue-600">
	<h3>More Reading</h3>
	<ul>
		<a href="https://www.youtube.com/watch?v=eSzNNYk7nVU" target="_blank">
			<li>Rebuilding iOS 15 with Tailwind CSS</li>
		</a>
		<a href="https://play.tailwindcss.com/kY4LYXwsNZ" target="_blank">
			<li>iPhone Summary Demo</li>
		</a>
		<a href="https://tailwindcss.com/" target="_blank">
			<li>Tailwind</li>
		</a>
	</ul>
</div>

<style>
	input[type='color']::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	input[type='color']::-webkit-color-swatch {
		border: 1px solid;
	}
</style>
