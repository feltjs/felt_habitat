<script lang="ts">
	import {writable} from 'svelte/store';
	import {UnreachableError} from '@grogarden/util/error.js';
	import {browser} from '$app/environment';
	import {random_int} from '@grogarden/util/random.js';
	import {base} from '$app/paths';

	import Felt_Window_Tenant from '$lib/Felt_Window_Tenant.svelte'; // TODO extract to what package?
	import Habitat from '$lib/Habitat.svelte';
	import {create_island_habitat_state, simulate_island_habitat} from '$lib/island.js';
	import {
		Habitat_World,
		type Habitat_Message,
		type Set_State_Habitat_Message,
	} from '$lib/habitat.js';
	import Emoji_Menu from '$lib/Emoji_Menu.svelte';

	const tree_emojis = ['🌲', '🌳', '🌴', '🌵'];
	const selected_tree_emojis = writable(tree_emojis.slice(0, 2));
	// const flowerEmojis = emoji.emoji.filter((e) => e.tags.includes('flower'));

	let innerWidth = 0; // account for any scrollbar
	let clientWidth = 0;
	let clientHeight = 0;

	const controls_min_width = 300;

	$: vertical = innerWidth < controls_min_width * 2.5;

	let tiles_wide = 13;
	let tiles_tall = 10;
	const tiles_wide_min = 3;
	const tiles_wide_max = 33;
	const tiles_tall_min = 3;
	const tiles_tall_max = 33;
	$: habitat.resize(tiles_wide, tiles_tall);

	const habitat = new Habitat_World(create_island_habitat_state, simulate_island_habitat);
	const {turn, state, reproduction, seed} = habitat;

	const SEED_MIN = 0;
	const SEED_MAX = 9999;

	$: habitat_width = vertical ? clientWidth : clientWidth - controls_min_width;
	$: habitat_height = vertical ? clientHeight / 2 : clientHeight;

	const TURN_DURATION_MIN = 1000 / 30;
	const TURN_DURATION_MAX = 2000;
	let turn_duration = 1000;

	// TODO this `ANIMATION_DURATION_OFFSET_HACK` is a hacky fix for jank animations in Firefox --
	// appears that if the animation doesn't finish before a new one is set,
	// it resets immediately to the initial state.
	// The downside is that it makes the animations less smooth,
	// especially at short duration.
	$: animation_duration = Math.max(16.67, turn_duration * 0.95 - 16.67);

	let show_tiles = true;
	let show_items = true;

	// TODO schedule a recurring clock thing
	let interval: number | null = null;
	const toggle = () => {
		const message: Habitat_Message = interval ? {type: 'habitat.stop'} : {type: 'habitat.start'};
		handle_and_post_message(message);
	};
	$: turn_duration, browser && (stop(), start());
	const start = () => {
		if (interval !== null) return;
		interval = setInterval(() => {
			habitat.simulate();
		}, turn_duration);
	};
	const stop = () => {
		if (interval === null) return;
		clearInterval(interval);
		interval = null;
	};

	$: running = interval !== null;

	$: habitat.trees = $selected_tree_emojis;

	// TODO better pattern than this? the problem is we want to handle messages.
	// could be done with an optional param like `post = true`,
	// and then pass `false` when applying a message from the host
	let post_message: (message: any) => void;
	const handle_and_post_message = (message: Habitat_Message): void => {
		post_message({type: 'Ephemera', params: message});
		handle_message(message);
	};
	const handle_message = (message: Habitat_Message): void => {
		console.log(`updateHabitat message`, message);
		switch (message.type) {
			case 'habitat.start': {
				start();
				break;
			}
			case 'habitat.stop': {
				stop();
				break;
			}
			case 'habitat.reset': {
				habitat.reset();
				break;
			}
			case 'habitat.next_turn': {
				habitat.simulate();
				break;
			}
			case 'habitat.update_state': {
				const {value} = message;
				if (value.tiles_wide !== undefined) tiles_wide = value.tiles_wide;
				if (value.tiles_tall !== undefined) tiles_tall = value.tiles_tall;
				if (value.show_tiles !== undefined) show_tiles = value.show_tiles;
				if (value.show_items !== undefined) show_items = value.show_items;
				if (value.turn_duration !== undefined) turn_duration = value.turn_duration;
				if (value.reproduction_rate !== undefined) $reproduction = value.reproduction_rate;
				if (value.seed !== undefined) habitat.setSeed(value.seed);
				break;
			}
			default:
				throw new UnreachableError(message);
		}
	};

	const on_text_input =
		(key: keyof Set_State_Habitat_Message['value']) =>
		(e: any): void => {
			// TODO why is this needed?
			// eslint-disable-next-line no-useless-escape
			const parsed = /^[\d\.]+$/u.test(e.target.value)
				? parseFloat(e.target.value)
				: e.target.value;
			const value = Number.isNaN(parsed) ? e.target.value : parsed;
			handle_and_post_message({type: 'habitat.update_state', value: {[key]: value}});
		};
	const on_mumber_input =
		(key: keyof Set_State_Habitat_Message['value']) =>
		(e: any): void => {
			handle_and_post_message({
				type: 'habitat.update_state',
				value: {[key]: Number(e.target.value)},
			});
		};
	const on_checkbox =
		(key: keyof Set_State_Habitat_Message['value']) =>
		(e: any): void => {
			handle_and_post_message({type: 'habitat.update_state', value: {[key]: e.target.checked}});
		};

	const random_seed = () => {
		let nextSeed;
		do {
			nextSeed = random_int(SEED_MIN, SEED_MAX, habitat.random);
		} while (nextSeed === $seed);
		return nextSeed;
	};
</script>

<svelte:window bind:innerWidth />

<div class="universe" bind:clientWidth bind:clientHeight class:vertical>
	<div class="world" style="--animation_duration: {animation_duration}ms">
		{#if habitat_width > 0}
			<Habitat
				state={$state}
				{tiles_wide}
				{tiles_tall}
				displayWidth={habitat_width}
				displayHeight={habitat_height}
				{show_tiles}
				{show_items}
			/>
		{/if}
	</div>
	<div
		class="controls"
		style:width={vertical ? '100%' : controls_min_width + 'px'}
		style:height={vertical ? habitat_height + 'px' : '100%'}
	>
		<form style:max-width="{controls_min_width}px">
			<Emoji_Menu emojis={tree_emojis} selected_emojis={selected_tree_emojis} />
			<!-- <Emoji_Menu emojis={flowerEmojis} /> -->
			<div class="turn">turn {$turn}</div>
			<fieldset class="row">
				<button type="button" on:click={() => toggle()} style:flex="1">
					{#if running}pause{:else}play{/if}
				</button>
				<button type="button" on:click={() => handle_and_post_message({type: 'habitat.next_turn'})}>
					tick
				</button>
				<button type="button" on:click={() => handle_and_post_message({type: 'habitat.reset'})}>
					reset
				</button>
			</fieldset>
			<fieldset>
				<label class="seed-label">
					seed
					<input
						type="range"
						value={$seed}
						on:input={on_mumber_input('seed')}
						step={1}
						min={SEED_MIN}
						max={SEED_MAX}
					/>
					<input type="text" value={$seed} on:input={on_text_input('seed')} />
				</label>
				<button
					type="button"
					on:click={() =>
						handle_and_post_message({type: 'habitat.update_state', value: {seed: random_seed()}})}
				>
					randomize
				</button>
			</fieldset>
			<label>
				turn duration
				<input
					type="range"
					value={turn_duration}
					on:input={on_mumber_input('turn_duration')}
					step={1000 / 60}
					min={TURN_DURATION_MIN}
					max={TURN_DURATION_MAX}
				/>
				<input type="number" value={turn_duration} on:input={on_mumber_input('turn_duration')} />
			</label>
			<label>
				reproduction rate
				<input
					type="range"
					value={$reproduction}
					on:input={on_mumber_input('reproduction_rate')}
					step={0.01}
					min={0}
					max={1}
				/>
				<input
					type="number"
					value={$reproduction}
					on:input={on_mumber_input('reproduction_rate')}
				/>
			</label>
			<label>
				tiles wide
				<input
					type="range"
					value={tiles_wide}
					on:input={on_mumber_input('tiles_wide')}
					step={1}
					min={tiles_wide_min}
					max={tiles_wide_max}
				/>
				<input type="number" value={tiles_wide} on:input={on_mumber_input('tiles_wide')} />
			</label>
			<label>
				tiles tall
				<input
					type="range"
					value={tiles_tall}
					on:input={on_mumber_input('tiles_tall')}
					step={1}
					min={tiles_tall_min}
					max={tiles_tall_max}
				/>
				<input type="number" value={tiles_tall} on:input={on_mumber_input('tiles_tall')} />
			</label>
			<fieldset class="row">
				<label>
					<input type="checkbox" checked={show_tiles} on:input={on_checkbox('show_tiles')} />
					show tiles
				</label>
				<label>
					<input type="checkbox" checked={show_items} on:input={on_checkbox('show_items')} />
					show items
				</label>
			</fieldset>
			<footer class="box">
				<a class="chip" href="{base}/about">about</a>
				<a href="https://github.com/feltjs/felt_habitat" class="box"
					><div>source code</div>
					<div style:font-size="var(--icon_size_md)">🌵</div></a
				>
			</footer>
		</form>
	</div>
</div>
<Felt_Window_Tenant
	bind:post_message
	on:message={(e) => {
		console.log(`message from window host e`, e.detail);
		const messageData = e.detail?.data;
		if (messageData) {
			handle_message(e.detail.data);
		}
	}}
/>

<style>
	.universe {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
	}
	.vertical {
		align-items: center;
		flex-direction: column;
	}
	.world {
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex: 1;
	}
	.controls {
		overflow: auto;
		display: flex;
		flex-shrink: 0;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing_sm);
	}
	.turn {
		font-size: var(--size_1);
		text-align: center;
	}
	button {
		white-space: nowrap;
	}
	/* TODO remove after using Felt */
	input[type='text'],
	input[type='number'] {
		width: 71px;
	}
	fieldset {
		align-items: center;
		margin-bottom: var(--spacing_1);
	}
	fieldset.row label {
		margin-bottom: 0;
	}
	label {
		margin-bottom: var(--spacing_1);
		width: 100%;
	}
	.seed-label {
		margin-bottom: 0;
	}
	footer {
		display: flex;
		justify-content: center;
	}
</style>
