<script>
	import Tabs from './Tabs.svelte';
	import CodeMirror from './CodeMirror.svelte';
	export let components = [];
	export let current = 0;
	export let errorLoc;
	let textarea;
	let editor;
	function get_max(_components) {
		const ids = _components.map(({ id }) => id);
		return Math.max(...ids);
	}
	function new_component() {
		const id = get_max(components) + 1;
		components = components.concat({
			id,
			name: `Component${id}`,
			type: 'svelte',
			source: ''
		});
		current = id;
		current_component = components.findIndex(({ id }) => id === current);
		editor.set('');
		editor.focus();
	}
	$: current_component = components.findIndex(({ id }) => id === current);
	$: tabs = components.map(({ id, name, type }) => ({ id, name, type }));

	function updateTextarea(value) {
		components[current_component].source = value.detail.value;
	}
</script>

<section>
	<Tabs
		{tabs}
		{current}
		on:select={({ detail }) => {
			current = detail;
			current_component = components.findIndex(({ id }) => id === current);
			editor.set(components[current_component].source);
		}}
		on:new={new_component}
	/>

	<div class="h-screen">
		<CodeMirror
			bind:this={editor}
			{errorLoc}
			bind:code={components[current_component].source}
			on:change={updateTextarea}
		/>
	</div>
	<textarea bind:value={components[current_component].source} bind:this={textarea} hidden />
</section>

<style>
	textarea {
		display: none;
	}
</style>
