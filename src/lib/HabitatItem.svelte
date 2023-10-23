<script lang="ts">
	import type {HabitatItem} from '$lib/habitat.js';

	export let item: HabitatItem;
	export let tile_width: number;
	export let tile_height: number;

	// TODO extract, to the item? ECS?

	// TODO how to make them animate from 0 scale to the initial scale?

	$: dusty = item.dead ? (item.age - item.dead_age) / (item.dust_age - item.dead_age) : 0; // % dusty
	$: scale = Math.min(1, item.age / item.dead_age) * Math.sqrt(1 - dusty / 4);
	$: grayscale = item.dead ? (dusty * 100) / 2 + '%' : '0%';
	$: x = item.x * tile_width;
	$: y = item.y * tile_height;
</script>

<div
	class="item"
	style="transform: translate3d({x}px, {y}px, 0px)
    scale3d({scale}, {scale}, {scale}); --grayscale: {grayscale}; opacity: {1 - dusty};"
>
	<div class:dead={item.dead}>
		{item.char}
	</div>
</div>

<style>
	.item {
		position: absolute;
		left: 0;
		top: 0;
		font-size: calc(0.8 * var(--tile_size));
		transform-origin: center bottom;
		transition:
			transform var(--animation_duration, 1s) ease-out,
			opacity var(--animation_duration, 1s) ease-out;
		animation-fill-mode: forwards;
		text-shadow:
			1px 1px #000,
			0px 0px 1px #000;
	}
	.dead {
		transform: rotate(70deg) skewX(-6deg) skewY(-25deg) scale(0.7);
		/* TODO increase grayscale into dust */
		filter: hue-rotate(290deg) brightness(0.8) grayscale(var(--grayscale));
	}
</style>
