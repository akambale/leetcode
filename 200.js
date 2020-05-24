var numIslands = function (grid) {
  const deleteIsland = (row, col) => {
    if (row >= grid.length || row < 0) return;
    if (col >= grid[0].length || col < 0) return;
    if (grid[row][col] === '0') return;
    grid[row][col] = '0';
    deleteIsland(row + 1, col);
    deleteIsland(row, col + 1);
    deleteIsland(row - 1, col);
    deleteIsland(row, col - 1);
  };

  let count = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        count++;
        deleteIsland(row, col);
      }
    }
  }
  return count;
};
