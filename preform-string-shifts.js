const minPathSum = grid => {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const getRight = (row, col) => {
    if (row < grid.length - 1) {
      return grid[row + 1][col];
    } else {
      return Infinity;
    }
  };

  const getDown = (row, col) => {
    if (col < grid[0].length - 1) {
      return grid[row][col + 1];
    } else {
      return Infinity;
    }
  };

  for (let row = grid.length - 1; row >= 0; row--) {
    for (let col = grid[0].length - 1; col >= 0; col--) {
      if (col === grid[0].length - 1 && row === grid.length - 1) continue;
      grid[row][col] =
        grid[row][col] + Math.min(getRight(row, col), getDown(row, col));
    }
  }

  return grid[0][0];
};
