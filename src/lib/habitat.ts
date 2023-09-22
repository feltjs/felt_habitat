import {get, writable, type Writable} from 'svelte/store';
import {create_random_alea} from '@grogarden/util/random_alea.js';

// TODO edit properties of each tile directly (change type, wetness, etc)
// TODO have a place these tilesets are visualized
// TODO compute reproduction factor of trees (must be >min age and <max age for each species)
// TODO add mountains and generate water from them

export interface HabitatState {
	tiles: HabitatTile[];
	items: HabitatItem[];
}

export interface HabitatItem {
	id: string;
	x: number;
	y: number;
	char: string;
	age: number;
	dead: boolean;
	dead_age: number;
	dust_age: number; // TODO needs different modeling, like material decomposition
	reproduction: number; // 0-1
	reproduction_age: number;
}

export interface HabitatTile {
	id: string;
	x: number;
	y: number;
	index: number;
	char: string;
}

export interface CreateHabitatState {
	(habitat: HabitatWorld): HabitatState;
}
export interface SimulateHabitat {
	(habitat: HabitatWorld): HabitatState;
}

export class HabitatWorld {
	constructor(
		protected create_habitat_state: CreateHabitatState,
		protected simulate_habitat: SimulateHabitat,
		tiles_wide = 10,
		tiles_tall = 10,
	) {
		this.tiles_wide = writable(tiles_wide);
		this.tiles_tall = writable(tiles_tall);
		this.state = writable(this.create_habitat_state(this));
	}

	seed: Writable<number | string> = writable(1);
	random = create_random_alea(get(this.seed));

	tiles_wide: Writable<number>;
	tiles_tall: Writable<number>;
	state: Writable<HabitatState>;

	// how many times `simulate` has been called
	turn = writable(0);

	// how much babys
	reproduction = writable(0.5); // TODO is weird to store this in a store when most other things are not

	// scale from 0-4 right now
	wetness: 0 | 1 | 2 | 3 | 4 = 3; // TODO needs to be stored per tile
	// indexed by `wetness`
	land_by_wetness = ['🟧', '🟨', '🟫', '🟩', '🟦'];

	// TODO express this more concisely
	// this is tuned to make the island usually
	// appear 0-3 times with a 1 tile border around the 16x16 grid (meaning 18 width/height but not filled, so 36 total)
	// prettier-ignore
	ocean = [...(('🔵'.repeat(4)  + '🌊').repeat(8) + '🏝')]; // uses `...` spread to properly split emoji
	mountains = ['⛰', '🏔', '🌋', '🗻', '🏞'];
	trees = ['🌲', '🌳'];

	resize(tiles_wide: number, tiles_tall: number): void {
		this.tiles_wide.set(tiles_wide);
		this.tiles_tall.set(tiles_tall);
		this.reset();
	}

	setSeed(seed: number | string): void {
		this.seed.set(seed);
		this.reset();
	}

	reset(): void {
		this.random = create_random_alea(get(this.seed));
		this.state.set(this.create_habitat_state(this));
		this.turn.set(0);
	}

	simulate(): void {
		this.state.set(this.simulate_habitat(this));
		this.turn.update((t) => t + 1);
	}
}

export type HabitatMessage =
	| StartHabitatMessage
	| StopHabitatMessage
	| ResetHabitatMessage
	| NextTurnHabitatMessage
	| SetStateHabitatMessage;
export interface StartHabitatMessage {
	type: 'habitat.start';
}
export interface StopHabitatMessage {
	type: 'habitat.stop';
}
export interface ResetHabitatMessage {
	type: 'habitat.reset';
}
export interface NextTurnHabitatMessage {
	type: 'habitat.nextTurn';
}
export interface SetStateHabitatMessage {
	type: 'habitat.updateState';
	value: {
		seed?: number | string;
		tiles_wide?: number;
		tiles_tall?: number;
		show_tiles?: boolean;
		show_items?: boolean;
		turn_duration?: number;
		reproduction_rate?: number;
	};
}
