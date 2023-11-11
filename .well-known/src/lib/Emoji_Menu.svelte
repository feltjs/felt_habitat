<script lang="ts">
	import type {Writable} from 'svelte/store';

	export let emojis: string[];
	export let selected_emojis: Writable<string[]>;

	const toggle_emoji = (emoji: string) => {
		$selected_emojis = $selected_emojis.includes(emoji)
			? $selected_emojis.filter((e) => e !== emoji)
			: $selected_emojis.concat(emoji);
	};
</script>

<fieldset>
	{#each emojis as emoji (emoji)}
		<button
			type="button"
			class:selected={$selected_emojis.includes(emoji)}
			on:click={() => toggle_emoji(emoji)}
		>
			{emoji}
		</button>
	{/each}
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		margin-bottom: var(--spacing_1);
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
