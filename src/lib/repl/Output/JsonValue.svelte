<script>
	export let value;

	$: type = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
	$: entries =
		type === 'array'
			? value.map((item, index) => [index, item])
			: type === 'object'
				? Object.entries(value)
				: [];
</script>

{#if type === 'array' || type === 'object'}
	<details open>
		<summary>{type === 'array' ? `Array(${value.length})` : '{...}'}</summary>
		<div class="children">
			{#each entries as [key, child]}
				<div class="entry">
					<span class="key">{key}:</span>
					<svelte:self value={child} />
				</div>
			{/each}
		</div>
	</details>
{:else if type === 'string'}
	<span class="string">"{value}"</span>
{:else if type === 'number'}
	<span class="number">{value}</span>
{:else if type === 'boolean'}
	<span class="boolean">{value}</span>
{:else if type === 'undefined'}
	<span class="muted">undefined</span>
{:else if type === 'null'}
	<span class="muted">null</span>
{:else}
	<span>{String(value)}</span>
{/if}

<style>
	details {
		display: inline-block;
		vertical-align: top;
	}

	summary {
		cursor: pointer;
		list-style-position: outside;
	}

	.children {
		padding-left: 14px;
	}

	.entry {
		display: flex;
		gap: 6px;
	}

	.key,
	.muted {
		color: #777;
	}

	.string {
		color: #0f766e;
	}

	.number,
	.boolean {
		color: #7c3aed;
	}
</style>
