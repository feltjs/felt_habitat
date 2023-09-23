<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@fuz.dev/fuz/Themed.svelte';
	import Dialog from '@fuz.dev/fuz/Dialog.svelte';
	import Contextmenu from '@fuz.dev/fuz/Contextmenu.svelte';
	import {createContextmenu} from '@fuz.dev/fuz/contextmenu.js';
	import {sync_color_scheme} from '@fuz.dev/fuz/theme.js';
	import {writable} from 'svelte/store';

	import Settings from '$routes/Settings.svelte';

	const contextmenu = createContextmenu();

	let showSettings = false;

	// TODO improve this API, simplify to set dark mode as the default
	const selected_color_scheme = writable('dark' as const);
	sync_color_scheme($selected_color_scheme); // TODO probably shouldn't be needed
</script>

<svelte:head>
	<title>@feltjs/felt-habitat</title>
</svelte:head>

<svelte:body
	use:contextmenu.action={[
		{
			content: 'Settings',
			icon: '?',
			run: () => {
				showSettings = true;
			},
		},
		{
			content: 'Reload',
			icon: '⟳',
			run: () => {
				location.reload();
			},
		},
	]}
/>

<Themed {selected_color_scheme} color_scheme_fallback="dark">
	<slot />
	<Contextmenu {contextmenu} />
	{#if showSettings}
		<Dialog on:close={() => (showSettings = false)}>
			<div class="pane">
				<Settings />
			</div>
		</Dialog>
	{/if}
</Themed>
