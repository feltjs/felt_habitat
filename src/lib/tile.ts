export const isBorderTile = (
	x: number,
	y: number,
	tiles_wide: number,
	tiles_tall: number,
): boolean => x === 0 || x === tiles_wide - 1 || y === 0 || y === tiles_tall - 1;
