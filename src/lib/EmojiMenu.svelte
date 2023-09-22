<script lang="ts">
	import type {Writable} from 'svelte/store';

	import type {Emoji} from '$lib/emoji';

	export let emojis: Emoji[];
	export let selected_emojis: Writable<Emoji[]>;

	const toggle_emoji = (emoji: Emoji) => {
		$selected_emojis = $selected_emojis.includes(emoji)
			? $selected_emojis.filter((e) => e !== emoji)
			: $selected_emojis.concat(emoji);
	};
</script>

<fieldset>
	{#each emojis as emoji (emoji.content)}
		<button
			type="button"
			class:selected={$selected_emojis.includes(emoji)}
			on:click={() => toggle_emoji(emoji)}
		>
			{emoji.content}
		</button>
	{/each}
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		margin-bottom: var(--spacing_xl);
	}
	button {
		background: none;
		font-size: 3.5em;
		opacity: 0.4;
		flex: 1;
	}
	.selected {
		opacity: 1;
	}
</style>
