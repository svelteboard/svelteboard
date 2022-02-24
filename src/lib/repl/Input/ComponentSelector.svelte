<script>
	import { getContext, createEventDispatcher } from 'svelte';

	export let plMenu = false;

	export let handle_select;
	export let show_modified;

	let { components, selected, request_focus, rebundle } = getContext('REPL');
	const dispatch = createEventDispatcher();

	let editing = null;

	function selectComponent(component) {
		if ($selected !== component) {
			editing = null;
			handle_select(component);
		}
	}

	function editTab(component) {
		if ($selected === component) {
			editing = $selected;
		}
	}

	function closeEdit() {
		const match = /(.+)\.(svelte|js|json|md)$/.exec($selected.name);
		$selected.name = match ? match[1] : $selected.name;
		if (isComponentNameUsed($selected)) {
			let i = 1;
			let name = $selected.name;
			do {
				$selected.name = `${name}_${i++}`;
			} while (isComponentNameUsed($selected));
		}
		if (match && match[2]) $selected.type = match[2];

		editing = null;

		// re-select, in case the type changed
		handle_select($selected);

		components = components; // TODO necessary?

		// focus the editor, but wait a beat (so key events aren't misdirected)
		setTimeout(request_focus);

		rebundle();
	}

	function remove(component) {
		let result = confirm(`Are you sure you want to delete ${component.name}.${component.type}?`);

		if (result) {
			const index = $components.indexOf(component);

			if (~index) {
				components.set($components.slice(0, index).concat($components.slice(index + 1)));
				dispatch('remove', { components: $components });
			} else {
				console.error(`Could not find component! That's... odd`);
			}

			handle_select($components[index] || $components[$components.length - 1]);
		}
	}

	function selectInput(event) {
		setTimeout(() => {
			event.target.select();
		});
	}

	let uid = 1;

	function addNew() {
		const component = {
			name: uid++ ? `Component${uid}` : 'Component1',
			type: 'svelte',
			source: '',
			modified: true
		};

		editing = component;

		components.update((components) => components.concat(component));
		handle_select(component);

		dispatch('add', { components: $components });
	}

	function isComponentNameUsed(editing) {
		return $components.find(
			(component) => component !== editing && component.name === editing.name
		);
	}

	// drag and drop
	let from = null;
	let over = null;

	function dragStart(event) {
		from = event.currentTarget.id;
	}

	function dragLeave() {
		over = null;
	}

	function dragOver(event) {
		event.preventDefault();
		over = event.currentTarget.id;
	}

	function dragEnd(event) {
		event.preventDefault();

		if (from && over) {
			const from_index = $components.findIndex((component) => component.name === from);
			const to_index = $components.findIndex((component) => component.name === over);

			const from_component = $components[from_index];

			$components.splice(from_index, 1);
			components.set(
				$components.slice(0, to_index).concat(from_component).concat($components.slice(to_index))
			);
		}
		from = over = null;
	}
</script>

<div class="component-selector pl-16 {plMenu ? 'lg:pl-14' : 'lg:pl-0'} transition-all">
	{#if $components.length}
		<div class="file-tabs" on:dblclick={addNew}>
			{#each $components as component, index}
				<div
					id={component.name}
					class="button"
					role="button"
					class:active={component === $selected}
					class:draggable={component !== editing && index !== 0}
					class:drag-over={over === component.name}
					on:click={() => selectComponent(component)}
					on:dblclick={(e) => e.stopPropagation()}
					draggable={component !== editing}
					on:dragstart={dragStart}
					on:dragover={dragOver}
					on:dragleave={dragLeave}
					on:drop={dragEnd}
				>
					<i class="drag-handle bg-transparent border-x border-slate-400/80 border-dotted" />
					{#if component.name === 'App' && component !== editing}
						<div class="uneditable">
							App.svelte{#if show_modified && component.modified}*{/if}
						</div>
					{:else if component === editing}
						<span class="input-sizer"
							>{editing.name + (/\./.test(editing.name) ? '' : `.${editing.type}`)}</span
						>

						<!-- svelte-ignore a11y-autofocus -->
						<input
							autofocus
							spellcheck={false}
							bind:value={editing.name}
							on:focus={selectInput}
							on:blur={closeEdit}
							on:keydown={(e) => e.which === 13 && !isComponentNameUsed(editing) && e.target.blur()}
							class:duplicate={isComponentNameUsed(editing)}
						/>
					{:else}
						<div class="editable" title="edit component name" on:click={() => editTab(component)}>
							{component.name}.{component.type}{#if show_modified && component.modified}*{/if}
						</div>

						<span class="remove" on:click={() => remove(component)}>
							<svg width="12" height="12" viewBox="0 0 24 24">
								<line stroke="#999" x1="18" y1="6" x2="6" y2="18" />
								<line stroke="#999" x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</span>
					{/if}
				</div>
			{/each}

			<button class="add-new" on:click={addNew} title="add new component">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 absolute -inset-y-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>
	{/if}
</div>

<style>
	.component-selector {
		position: relative;
		background: #293548;
		overflow: hidden;
		-webkit-box-shadow: inset 0 -5px 0px -3px #3a485d, inset 0 10px 0px 0px #3a485d;
		-moz-box-shadow: inset 0 -5px 0px -3px #3a485d, inset 0 10px 0px 0px #3a485d;
		box-shadow: inset 0 -5px 0px -3px #3a485d, inset 0 10px 0px 0px #3a485d;
	}

	.file-tabs {
		border: none;
		margin: 0;
		white-space: nowrap;
		overflow-x: auto;
		overflow-y: hidden;
		height: 49px;
		border-top: 9px solid #1e293b;
	}

	.file-tabs .button,
	.file-tabs button {
		position: relative;
		display: inline-block;
		font-size: 12px;
		border: none;
		border-bottom: 1px solid transparent;
		padding: 12px 22px 6px 22px;
		color: #cbd5e1;
		border-radius: 1px;
		cursor: pointer;
		z-index: 10;
		border-top: 1px solid transparent;
		border-bottom: 1px solid transparent;
	}
	button.add-new {
		border-top: 0px !important;
		border-bottom: 0px !important;
	}
	.file-tabs .button:hover,
	.file-tabs button:hover {
		color: #fff;
	}

	.file-tabs .button.active {
		color: #7dd3fc;
		border-bottom: 1px solid #7dd3fc !important;
		border-top: 1px solid #1e293b;
		border-left: 1px solid #3a485d;
		border-right: 1px solid #3a485d;
		background: #1e293b;
		z-index: 10;
		border-radius: 0;
	}
	.file-tabs .button.active::after {
		content: '';
		position: absolute;
		top: 0;
		right: -4px;
		width: 4px;
		height: 100%;
		background: red;
		border-right: 1px solid #3a485d;
		border-top: 1px solid #3a485d;
		border-radius: 0px 10px 0px 0px;
		z-index: 10;
	}
	.file-tabs .button.active:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0px;
		width: 4px;
		height: 100%;
		border-left: 1px solid #3a485d;
		border-top: 1px solid #3a485d;
		border-radius: 0px 10px 0px 0px;
		z-index: 10;
	}
	.file-tabs .button.active:before,
	.file-tabs .button.active:after {
		display: none;
	}

	.editable,
	.uneditable,
	.input-sizer,
	input {
		display: inline-block;
		position: relative;
		line-height: 1;
	}

	.input-sizer {
		color: #ccc;
	}

	input {
		position: absolute;
		width: 100%;
		left: 22px;
		top: 14px;
		font: 12px;
		border: none;
		color: var(--flash);
		outline: none;
		background-color: transparent;
	}

	.duplicate {
		color: var(--prime);
	}

	.remove {
		position: absolute;
		display: none;
		right: 9px;
		top: 3px;
		width: 16px;
		text-align: right;
		padding: 12px 0 12px 10px;
		font-size: 8px;
		cursor: pointer;
	}

	.remove:hover {
		color: var(--flash);
	}

	.file-tabs .button.active .editable {
		cursor: text;
	}

	.file-tabs .button.active .remove {
		display: block;
	}

	.file-tabs .button.drag-over {
		background: #67677814;
	}

	.file-tabs .button.drag-over {
		cursor: move;
	}

	.drag-handle {
		cursor: move;
		width: 3px;
		height: 25px;
		position: absolute;
		left: 5px;
		top: 9px;
	}
</style>
