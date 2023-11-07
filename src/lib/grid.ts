// 2d rectangular grid, x/y are some positive integers
export const is_bordering = (
	tiles_wide: number,
	tiles_tall: number,
	x: number,
	y: number,
): boolean => x === 0 || x === tiles_wide - 1 || y === 0 || y === tiles_tall - 1;

export const is_in_bounds = (
	tiles_wide: number,
	tiles_tall: number,
	x: number,
	y: number,
): boolean => x >= 0 && y >= 0 && x < tiles_wide && y < tiles_tall;

export const are_neighbors = (x: number, y: number, x2: number, y2: number): boolean => {
	const dx = x - x2;
	const dy = y - y2;
	return (
		(dx === 1 || dx === 0 || dx === -1) &&
		(dy === 1 || dy === 0 || dy === -1) &&
		!(dx === 0 && dy === 0)
	);
};

export const is_border_tile = (
	x: number,
	y: number,
	tiles_wide: number,
	tiles_tall: number,
): boolean => x === 0 || x === tiles_wide - 1 || y === 0 || y === tiles_tall - 1;
