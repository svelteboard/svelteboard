<script>
	export let checked;
	import Checkbox from './Checkbox.svelte';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="input-output-toggle bg-white/40">
	<span class:active={!checked} style="text-align: right">input</span>
	<Checkbox bind:checked />
	<span class:active={checked}>output</span>
</label>

<style>
	.input-output-toggle {
		display: grid;
		user-select: none;
		flex: 0;
		grid-template-columns: 1fr 40px 1fr;
		grid-gap: 0.5em;
		align-items: center;
		width: 100%;
		height: 51px;
		border-top: 1px solid var(--second);
		z-index: 2;
	}

	span {
		color: #ccc;
	}
	.active {
		color: #555;
	}
</style>
