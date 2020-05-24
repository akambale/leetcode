var orangesRotting = function (grid) {
  let nr = grid.length;
  let nc = grid[0].length;

  let hasFlipped = true;

  const changeOrange = (row, col) => {
    if (row !== 0 && grid[row - 1][col] === 1) {
      grid[row - 1][col] = 3;
      hasFlipped = true;
    }
    if (col !== 0 && grid[row][col - 1] === 1) {
      grid[row][col - 1] = 3;
      hasFlipped = true;
    }
    if (row !== nr - 1 && grid[row + 1][col] === 1) {
      grid[row + 1][col] = 3;
      hasFlipped = true;
    }
    if (col !== nc - 1 && grid[row][col + 1] === 1) {
      grid[row][col + 1] = 3;
      hasFlipped = true;
    }
  };
  let count = 0;
  while (hasFlipped) {
    hasFlipped = false;
    for (let row = 0; row < nr; row++) {
      for (let col = 0; col < nc; col++) {
        if (grid[row][col] === 2) {
          changeOrange(row, col);
        }
      }
    }
    count++;

    for (let row = 0; row < nr; row++) {
      for (let col = 0; col < nc; col++) {
        if (grid[row][col] === 3) {
          grid[row][col] = 2;
        }
      }
    }
    console.table(grid);
  }

  let hasFresh = false;
  for (let row = 0; row < nr; row++) {
    for (let col = 0; col < nc; col++) {
      if (grid[row][col] === 1) {
        return -1;
      }
    }
  }

  return count - 1;
};
