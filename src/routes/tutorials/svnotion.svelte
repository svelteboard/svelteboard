<script>
	import Repl from '$lib/repl';
	import { onMount } from 'svelte';

	let repl;
	let components = [
		{
			name: 'App',
			type: 'svelte',
			source: `\<script>
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap\/core';
	import StarterKit from '@tiptap\/starter-kit';
	import suggestion from '.\/suggestion';
	import Commands from '.\/command';
	import CommandList from '.\/CommandList.svelte';
	import { slashVisible, slashItems, slashProps } from '.\/stores';

	let content = \`<p>Hello world 🌎 Type '/' for commands.<\/p>\`;
	
	let selectedIndex = 0;
	$: selectedIndex = $slashVisible ? selectedIndex : 0;

	function handleKeydown(event) {
		if (!$slashVisible) return;
		if (event.key === 'ArrowUp') {
			event.preventDefault();
			selectedIndex = (selectedIndex + $slashItems.length - 1) % $slashItems.length;
			return true;
		}
		if (event.key === 'ArrowDown') {
			event.preventDefault();
			selectedIndex = (selectedIndex + 1) % $slashItems.length;
			return true;
		}

		if (event.key === 'Enter') {
			event.preventDefault();
			selectItem(selectedIndex);
			return true;
		}

		return false;
	}


	function selectItem(index) {
		const item = $slashItems[index];

		if (item) {
			let range = $slashProps.range;
			item.command({ editor, range });
		}
	}

	let element, editor, w;

	onMount(() => {
			editor = new Editor({
				element: element,
				editorProps: {
					attributes: {
						class: 'focus:outline-none px-3 md:px-0'
					}
				},
				extensions: [
					StarterKit,
					Commands.configure({
						suggestion
					})
				],
				content,
				onTransaction: () => {
					\/\/ force re-render so \`editor.isActive\` works as expected
					editor = editor;
				},
				onUpdate: ({ editor }) => {
					\/\/ send the content to an API here
				}
			});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
<\/script>


\<svelte:head>\
	<script src='https://cdn.tailwindcss.com?plugins=forms,typography'>\</script\>\
<\/svelte:head>


<div class="prose prose-slate sm:prose-xl lg:prose-3xl p-4">
	<div bind:this={element} on:keydown|capture={handleKeydown} \/>
<\/div>

<CommandList {selectedIndex} \/>
`
		},
		{
			name: 'CommandList',
			type: 'svelte',
			source: `<script>
	export let selectedIndex = 0;
	import { slashVisible, slashItems, slashLocaltion, slashProps } from '.\/stores';

	let height;

	let elements = [];
<\/script>

<svelte:window bind:innerHeight={height} \/>

{#if $slashVisible}
	<div class="w-full absolute h-screen top-0" on:click={() => ($slashVisible = false)} \/>
	<div
		class="absolute bg-white shadow-xl w-96 max-w-full rounded-lg overflow-scroll"
		style="left: {$slashLocaltion.x}px; top: {$slashLocaltion.y + $slashLocaltion.height + 384 >
		height
			? $slashLocaltion.y - $slashLocaltion.height - 384
			: $slashLocaltion.y + $slashLocaltion.height}px;"
	>
		<div class="p-2 text-sm text-slate-500">BLOCKS<\/div>
		{#each $slashItems as { title, subtitle, command }, i}
			<div
				class="p-3 cursor-pointer {i == selectedIndex ? 'bg-slate-100' : 'bg-white'}"
				on:mouseenter={() => (selectedIndex = i)}
				on:click={() => {
					$slashVisible = false;
					command($slashProps);
				}}
				bind:this={elements[i]}
			>
				<div class="">{title}<\/div>
				<div class="text-sm text-slate-500">{subtitle ? subtitle : ''}<\/div>
			<\/div>
		{\/each}
	<\/div>
{\/if}
`
		},
		{
			name: 'suggestion',
			type: 'js',
			source: `import { slashVisible, slashItems, slashLocaltion, slashProps } from '.\/stores';

export default {
	items: ({ query }) => {
		return [
			{
				title: 'Heading 1',
				subtitle: 'BIG heading',
				command: ({ editor, range }) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run();
				}
			},
			{
				title: 'Heading 2',
				subtitle: 'Less Big heading',
				command: ({ editor, range }) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run();
				}
			},
			{
				title: 'Heading 3',
				subtitle: 'Medium big heading',
				command: ({ editor, range }) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run();
				}
			},
			{
				title: 'Bullet List',
				subtitle: 'Pew pew pew',
				command: ({ editor, range }) => {
					editor.commands.deleteRange(range);
					editor.commands.toggleBulletList();
				}
			},
			{
				title: 'Numbered List',
				subtitle: '1, 2, 3, 4',
				command: ({ editor, range }) => {
					editor.commands.deleteRange(range);
					editor.commands.toggleOrderedList();
				}
			}
		]
			.filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
			.slice(0, 10);
	},

	render: () => {
		return {
			onStart: (props) => {
				let editor = props.editor;
				let range = props.range;
				let location = props.clientRect();
				slashProps.set({ editor, range });
				slashVisible.set(true);
				slashLocaltion.set({ x: location.x, y: location.y, height: location.height });
				slashItems.set(props.items);
			},

			onUpdate(props) {
				slashItems.set(props.items);
			},

			onKeyDown(props) {
				if (props.event.key === 'Escape') {
					slashVisible.set(false);
					return true;
				}
			},

			onExit() {
				slashVisible.set(false);
			}
		};
	}
};
`
		},
		{
			name: 'command',
			type: 'js',
			source: `import { Extension } from '@tiptap\/core';
import Suggestion from '@tiptap\/suggestion';

export default Extension.create({
	name: 'slash',

	addOptions() {
		return {
			suggestion: {
				char: '\/',
				command: ({ editor, range, props }) => {
					props.command({ editor, range });
				}
			}
		};
	},

	addProseMirrorPlugins() {
		return [
			Suggestion({
				editor: this.editor,
				...this.options.suggestion
			})
		];
	}
});
`
		},
		{
			name: 'stores',
			type: 'js',
			source: `import { writable } from 'svelte\/store';

export const slashVisible = writable(false);
export const slashItems = writable([]);
export const slashLocaltion = writable({ x: 0, y: 0, height: 0 });
export const slashProps = writable({ editor: null, range: null });
`
		}
	];
	onMount(() => {
		repl.set({ components });
	});
</script>

<svelte:head>
	<title>Svelte Tiptap Notion Clone</title>
	<meta property="og:title" content="Svelte Tiptap Notion Clone" />
	<meta property="og:site_name" content="Svelte Board" />
	<meta property="og:url" content="https://svelteboard.com/tutorials/svnotion" />
	<meta
		property="og:description"
		content="Building a Notion editor clone with Svelte, Tiptap and Tailwind."
	/>
	<meta property="og:type" content="article" />
	<meta property="og:image" content="https://svelteboard.com/svnotion.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="max-w-3xl m-auto p-4 mt-32">
	<h1 class="text-3xl tracking-tight font-extrabold text-slate-900 mb-4">
		Svelte Tiptap Notion Clone
	</h1>
	<div class="max-w-3xl m-auto prose sm:prose-xl prose-slate clear-both pt-8 prose-a:text-blue-600">
		<div style="position: relative; padding-bottom: 56.25%; height: 0;">
			<iframe
				title="Svnotion Demo"
				src="https://www.loom.com/embed/3b8365cf2fdf4777be78f49f5ce318e2"
				frameborder="0"
				webkitallowfullscreen
				mozallowfullscreen
				allowfullscreen
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
			/>
		</div>
		<p>
			<b>Demo site:</b>
			<a href="http://svelte-tiptap.vercel.app/" target="_blank">svelte-tiptap.vercel.app</a> <br />
			<b>Github Repo:</b>
			<a href="https://github.com/andheller/svelte-tiptap" target="_blank"
				>https://github.com/andheller/svelte-tiptap</a
			>.
		</p>
		<h2>Overview</h2>
		<p>
			The slash commands in the demo use a Svelte store to keep track of the commands and filter the
			list as the user types. There is also a store that keeps track which item is currently being
			hovered on and resets the index to zero if the slash command menu is closed.
		</p>

		<p>The Repl below is a simplified version that doesn't have quite as many moving parts.</p>
	</div>
</div>

<div class="max-w-full m-auto h-[700px] border shadow-xl rounded-lg overflow-clip mt-8">
	<Repl bind:this={repl} on:change={(e) => (components = e.detail.components)} />
</div>
