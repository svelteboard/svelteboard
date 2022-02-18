<script>
	import { browser } from '$app/env';
	import Input from './Input.svelte';
	import Output from './/Output.svelte';

	let screenWidth;
	let inputWidth = 50;
	let outputWidth = 50;
	let mouseDown = false;
	let x = 0;
	let e = 0;

	function handleMousedown() {
		mouseDown = true;
	}
	function handleMouseup() {
		mouseDown = false;
	}
	function handleMousemove(event) {
		if (mouseDown) {
			outputWidth = 100 - inputWidth;
			inputWidth = (event.clientX / screenWidth) * 100;
			x = event.clientX;
			e = event;
		}
	}

	export let components = [
		{
			id: 0,
			name: 'App',
			type: 'svelte',
			source: `<script>
	let name = 'world';
<\/script>

<h1 class="text-3xl text-orange-800 text-center bg-orange-50 p-16 m-16 shadow-xl">Hello {name} 🎉!</h1>
	`
		}
	];

	let compiled;
	let current = 0;
	let worker;

	if (browser) {
		worker = new Worker('./service-worker.js');

		worker.addEventListener('message', (event) => {
			compiled = event.data;
		});
	}
	function compile(_components) {
		if (browser) worker.postMessage(_components);
	}

	$: compile(components);
</script>

<svelte:window bind:innerWidth={screenWidth} on:mouseup={handleMouseup} />
<main>
	<div class="flex" on:mousemove={handleMousemove}>
		<div class="bg-gray-900 text-white input" style="width:{inputWidth}%">
			<Input bind:components bind:current />
		</div>
		<div
			class="resize"
			class:active={mouseDown}
			style="left:calc(calc({inputWidth}% - 2px)"
			on:mousedown={handleMousedown}
		/>
		<div class="output" style="width:{outputWidth}%">
			<Output {compiled} />
		</div>
	</div>
</main>

<style>
	.resize {
		position: absolute;
		width: 2px;
		height: 100%;
		cursor: ew-resize;
		z-index: 10;
		padding: 8px;
		border-left: 2px solid #fff;
	}
	.resize.active {
		padding: 0px 250px;
	}
</style>
