<script>
	import { spring } from 'svelte/motion';
	import SplitPane from '../SplitPane.svelte';

	export let panel;
	export let pos = 50;
	let previous_pos = Math.min(pos, 70);

	let max;

	// we can't bind to the spring itself, but we
	// can still use the spring to drive `pos`
	const driver = spring(pos);
	$: pos = $driver;

	const toggle = () => {
		driver.set(pos, { hard: true });

		if (pos > 80) {
			driver.set(previous_pos);
		} else {
			previous_pos = pos;
			driver.set(max);
		}
	};
</script>

<SplitPane bind:max type="vertical" bind:pos>
	<section slot="a" class="h-full">
		<slot name="main" />
	</section>

	<section slot="b">
		<div class="panel-header" on:click={toggle}>
			<h3>{panel}</h3>
			<slot name="panel-header" />
		</div>

		<div class="panel-body">
			<slot name="panel-body" />
		</div>
	</section>
</SplitPane>

<style>
	.panel-header {
		height: 51px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5em;
		cursor: pointer;
	}

	.panel-body {
		overflow: auto;
	}

	h3 {
		font: 700 12px/1.5 var(--font);
		color: #333;
	}

	section {
		overflow: hidden;
	}
</style>
