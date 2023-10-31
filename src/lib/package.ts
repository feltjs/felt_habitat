// generated by src/lib/package.gen.ts

import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@feltjs/felt_habitat',
	description:
		'a proof-of-concept Svelte component for collaborative simulated habitats using Felt',
	version: '0.1.0',
	public: true,
	icon: '🌵',
	license: 'Unlicense',
	type: 'module',
	homepage: 'https://habitat.felt.dev/',
	repository: 'https://github.com/feltjs/felt_habitat',
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {'@grogarden/util': '*', '@sveltejs/kit': '*', svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.77.1',
		'@fuz.dev/fuz_contextmenu': '^0.5.1',
		'@fuz.dev/fuz_dialog': '^0.4.2',
		'@grogarden/gro': '^0.98.1',
		'@grogarden/util': '^0.15.4',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.2',
		'@sveltejs/package': '^2.2.2',
		'@typescript-eslint/eslint-plugin': '^6.9.1',
		'@typescript-eslint/parser': '^6.9.1',
		eslint: '^8.52.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		svelte: '^4.2.2',
		'svelte-check': '^3.5.2',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Emoji_Menu.svelte': {
			svelte: './dist/Emoji_Menu.svelte',
			default: './dist/Emoji_Menu.svelte',
			types: './dist/Emoji_Menu.svelte.d.ts',
		},
		'./Felt_Window_Tenant.svelte': {
			svelte: './dist/Felt_Window_Tenant.svelte',
			default: './dist/Felt_Window_Tenant.svelte',
			types: './dist/Felt_Window_Tenant.svelte.d.ts',
		},
		'./grid.js': {default: './dist/grid.js', types: './dist/grid.d.ts'},
		'./Habitat_Item.svelte': {
			svelte: './dist/Habitat_Item.svelte',
			default: './dist/Habitat_Item.svelte',
			types: './dist/Habitat_Item.svelte.d.ts',
		},
		'./Habitat_Tile.svelte': {
			svelte: './dist/Habitat_Tile.svelte',
			default: './dist/Habitat_Tile.svelte',
			types: './dist/Habitat_Tile.svelte.d.ts',
		},
		'./Habitat_View.svelte': {
			svelte: './dist/Habitat_View.svelte',
			default: './dist/Habitat_View.svelte',
			types: './dist/Habitat_View.svelte.d.ts',
		},
		'./Habitat.svelte': {
			svelte: './dist/Habitat.svelte',
			default: './dist/Habitat.svelte',
			types: './dist/Habitat.svelte.d.ts',
		},
		'./habitat.js': {default: './dist/habitat.js', types: './dist/habitat.d.ts'},
		'./island.js': {default: './dist/island.js', types: './dist/island.d.ts'},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
		'./tile.js': {default: './dist/tile.js', types: './dist/tile.d.ts'},
	},
	modules: {
		'./Emoji_Menu.svelte': {path: 'Emoji_Menu.svelte', declarations: []},
		'./Felt_Window_Tenant.svelte': {path: 'Felt_Window_Tenant.svelte', declarations: []},
		'./grid.js': {
			path: 'grid.ts',
			declarations: [
				{name: 'is_bordering', kind: 'VariableDeclaration'},
				{name: 'is_in_bounds', kind: 'VariableDeclaration'},
				{name: 'are_neighbors', kind: 'VariableDeclaration'},
			],
		},
		'./Habitat_Item.svelte': {path: 'Habitat_Item.svelte', declarations: []},
		'./Habitat_Tile.svelte': {path: 'Habitat_Tile.svelte', declarations: []},
		'./Habitat_View.svelte': {path: 'Habitat_View.svelte', declarations: []},
		'./Habitat.svelte': {path: 'Habitat.svelte', declarations: []},
		'./habitat.js': {
			path: 'habitat.ts',
			declarations: [
				{name: 'Habitat_State', kind: 'InterfaceDeclaration'},
				{name: 'Habitat_Item', kind: 'InterfaceDeclaration'},
				{name: 'Habitat_Tile', kind: 'InterfaceDeclaration'},
				{name: 'Create_Habitat_State', kind: 'InterfaceDeclaration'},
				{name: 'Simulate_Habitat', kind: 'InterfaceDeclaration'},
				{name: 'Habitat_World', kind: 'ClassDeclaration'},
				{name: 'Habitat_Message', kind: 'TypeAliasDeclaration'},
				{name: 'Start_Habitat_Message', kind: 'InterfaceDeclaration'},
				{name: 'Stop_Habitat_Message', kind: 'InterfaceDeclaration'},
				{name: 'Reset_Habitat_Message', kind: 'InterfaceDeclaration'},
				{name: 'Next_Turn_Habitat_Message', kind: 'InterfaceDeclaration'},
				{name: 'Set_State_Habitat_Message', kind: 'InterfaceDeclaration'},
			],
		},
		'./island.js': {
			path: 'island.ts',
			declarations: [
				{name: 'create_island_habitat_state', kind: 'VariableDeclaration'},
				{name: 'simulate_island_habitat', kind: 'VariableDeclaration'},
				{name: 'random_habitat_item', kind: 'VariableDeclaration'},
			],
		},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [{name: 'package_json', kind: 'VariableDeclaration'}],
		},
		'./tile.js': {
			path: 'tile.ts',
			declarations: [{name: 'is_border_tile', kind: 'VariableDeclaration'}],
		},
	},
} satisfies PackageJson;

// generated by src/lib/package.gen.ts
