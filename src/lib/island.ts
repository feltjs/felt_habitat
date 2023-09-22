import {create_client_id_creator} from '@grogarden/util/id.js';
import {random_float, random_int, random_item} from '@grogarden/util/random.js';
import {get} from 'svelte/store';

import type {
	HabitatItem,
	HabitatState,
	HabitatTile,
	HabitatWorld,
	CreateHabitatState,
	SimulateHabitat,
} from '$lib/habitat';
import {is_in_bounds, is_bordering} from '$lib/grid';

/*

a habitat implementation

*/

const UNIT_DISTANCE = [-1, 0, 1]; // TODO hhm

const create_item_id = create_client_id_creator('item');

// TODO better abstraction -- everything should be an option
// probably want a class to manage all of the state,
// but should the generator be separate from the simulation?
const empty_probability = 0.8;
// const living_probability = 0.83; // TODO use this as % chance to turn to dust instead of precomputing the `dust_age`

export const create_island_habitat_state: CreateHabitatState = (
	habitat: HabitatWorld,
): HabitatState => ({
	tiles: random_habitat_tiles(habitat),
	items: random_habitat_items(habitat),
});

// TODO not sure about these names -- seems good to externalize these behaviors
const random_habitat_tiles = (habitat: HabitatWorld): HabitatTile[] => {
	const tiles_wide = get(habitat.tiles_wide);
	const tiles_tall = get(habitat.tiles_tall);
	const tiles: HabitatTile[] = [];
	let i = 0;
	for (let y = 0; y < tiles_tall; y++) {
		for (let x = 0; x < tiles_wide; x++) {
			const index = i;
			i++;
			let char: string;
			const ocean = is_bordering(tiles_wide, tiles_tall, x, y);
			if (ocean) {
				char = random_item(habitat.ocean, habitat.random);
			} else {
				char = habitat.land_by_wetness[habitat.wetness];
			}
			tiles.push({
				id: `${x},${y}`,
				x,
				y,
				index,
				char,
			});
		}
	}
	return tiles;
};

const random_habitat_items = (habitat: HabitatWorld): HabitatItem[] => {
	const tiles_wide = get(habitat.tiles_wide);
	const tiles_tall = get(habitat.tiles_tall);
	const items: HabitatItem[] = [];
	for (let y = 0; y < tiles_tall; y++) {
		for (let x = 0; x < tiles_wide; x++) {
			// TODO mountains
			if (
				is_bordering(tiles_wide, tiles_tall, x, y) ||
				random_float(0, 1, habitat.random) < empty_probability
			) {
				continue;
			}
			items.push(random_habitat_item(habitat, x, y));
		}
	}
	return items;
};

// TODO instead of updating data directly, create a list of events?
export const simulate_island_habitat: SimulateHabitat = (habitat: HabitatWorld): HabitatState => {
	const $state = get(habitat.state);
	const next_state: HabitatState = {
		tiles: $state.tiles,
		items: [],
	};
	const tiles_wide = get(habitat.tiles_wide);
	const tiles_tall = get(habitat.tiles_tall);
	const {items} = next_state;
	for (const item of $state.items) {
		// TODO lots of temporary hardcoding
		const age = item.age + 1;
		const dead = !item.dead && age > item.dead_age ? true : item.dead;
		const dust = dead && age > item.dust_age;
		if (dust) continue; // eventually the dead return to dust
		const next_item = {...item, age, dead};
		items.push(next_item);
		// TODO support making more than one baby in a turn depending on species
		const has_room_to_reproduce = $state.items.length <= $state.tiles.length;
		if (!has_room_to_reproduce) continue;
		const can_reproduce = !item.dead && item.age >= item.reproduction_age; // TODO improve check
		if (!can_reproduce) continue;
		const wants_to_reproduce =
			random_float(0, 1, habitat.random) < item.reproduction * get(habitat.reproduction);
		if (!wants_to_reproduce) continue;
		// is there space to put it? no-op if not (for now)
		// TODO support species that can outcompete others
		// (e.g. allow offspring to displace existing items, do some simple modeling of competition)
		const dx = random_item(UNIT_DISTANCE, habitat.random);
		const dy = random_item(UNIT_DISTANCE, habitat.random);
		const offspring_x = next_item.x + dx;
		const offspring_y = next_item.y + dy;
		if (
			!is_bordering(tiles_wide, tiles_tall, offspring_x, offspring_y) &&
			is_in_bounds(tiles_wide, tiles_tall, offspring_x, offspring_y) &&
			// TODO this is really inefficient by searching both arrays, but not sure how to avoid collisions
			// also there's an error - if an item has moved from one location to the next this turn,
			// it shouldn't block its previous location like the logic currently does
			!find_item_at($state.items, offspring_x, offspring_y) &&
			!find_item_at(items, offspring_x, offspring_y) // because things may have moved this turn
		) {
			const offspring = random_habitat_item(habitat, offspring_x, offspring_y, {
				char: next_item.char,
				age: 0,
			});
			items.push(offspring);
		} // else blocked :-(
	}
	return next_state;
};

// TODO needs to be refactored because it's slow and weird, see usage above
const find_item_at = (items: HabitatItem[], x: number, y: number): HabitatItem | undefined => {
	for (const item of items) {
		if (item.x === x && item.y === y) {
			return item;
		}
	}
	return undefined;
};

export const random_habitat_item = (
	habitat: HabitatWorld,
	x: number,
	y: number,
	partial?: Partial<HabitatItem>,
): HabitatItem => {
	const age = partial?.age ?? random_int(0, 10, habitat.random);
	const reproduction_age = 5;
	const dust_duration = 5;
	const dead_age = 10;
	return {
		id: create_item_id(),
		x,
		y,
		// TODO compute from age
		dead: age >= dead_age,
		dead_age,
		dust_age: dead_age + dust_duration,
		reproduction: 1, // TODO
		reproduction_age,
		...partial,
		age,
		char: partial?.char ?? random_item(habitat.trees, habitat.random),
	};
};
