<script lang="ts">
	import Habitat_Item from '$lib/Habitat_Item.svelte';
	import Habitat_Tile from '$lib/Habitat_Tile.svelte';
	import type {Habitat_State} from '$lib/habitat.js';

	export let state: Habitat_State;
	export let tiles_wide: number;
	export let tiles_tall: number;
	export let display_width: number;
	export let display_height: number;
	export let show_tiles = true;
	export let show_items = true;

	$: tile_width_max = Math.floor(display_width / tiles_wide);
	$: tile_height_max = Math.floor(display_height / tiles_tall);
	$: tile_size = Math.min(tile_width_max, tile_height_max);
	$: habitat_width = tiles_wide * tile_size;
	$: habitat_height = tiles_tall * tile_size;
</script>

<div
	class="habitat"
	style:--tile_size="{tile_size}px"
	style:--habitat_width="{habitat_width}px"
	style:--habitat_height="{habitat_height}px"
	style:--tile_height="{tile_size}px"
	style:--tile_width="{tile_size}px"
>
	{#if show_tiles}
		<div class="tiles">
			{#each state.tiles as tile (tile.id)}
				<Habitat_Tile {tile} tile_width={tile_size} tile_height={tile_size} />
			{/each}
		</div>
	{/if}
	{#if show_items}
		<div class="items">
			{#each state.items as item (item.id)}
				<Habitat_Item {item} tile_width={tile_size} tile_height={tile_size} />
			{/each}
		</div>
	{/if}
</div>

<style>
	.habitat {
		position: relative;
		width: var(--habitat_width);
		height: var(--habitat_height);
		text-align: center;
	}
	.tiles {
		position: absolute;
		left: 0;
		top: 0;
		width: var(--habitat_width);
		height: var(--habitat_height);
	}
	.items {
		position: absolute;
		left: 0;
		top: 0;
		width: var(--habitat_width);
		height: var(--habitat_height);
	}
</style>
