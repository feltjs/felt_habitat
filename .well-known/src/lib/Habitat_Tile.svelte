<script lang="ts">
	import type {Habitat_Tile} from '$lib/habitat.js';

	export let tile: Habitat_Tile;
	export let tile_width: number;
	export let tile_height: number;
</script>

<div
	class="tile"
	style="transform: translate3d({tile.x * tile_width}px, {tile.y * tile_height}px, 0px);"
>
	{tile.char}
</div>

<style>
	.tile {
		position: absolute;
		left: 0;
		top: 0;
		width: var(--tile_width);
		height: var(--tile_height);
		font-size: calc(0.85 * var(--tile_size));
		transform-origin: top left;
	}
</style>
