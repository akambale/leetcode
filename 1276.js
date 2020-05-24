// I said I would post a more optimal solution, but
// nvm, this is good enough. I ran into some issues
// with my other idea so I don't think it would work

const reduceRow = (grid, row) => {
  const sum = grid[row].reduce((a, b) => a + b, 0);
  return sum > 1 ? sum : 0;
};

const reduceCol = (grid, col) => {
  let sum = 0;
  for (let row = 0; row < grid.length; row++) {
    sum += grid[row][col];
  }
  return sum > 1 ? sum : 0;
};

var countServers = function (grid) {
  const memo = {};
  let rowKey;
  let colKey;
  let serverCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 0) continue;

      rowKey = `row-${row}`;
      colKey = `col-${col}`;

      if (!memo[rowKey]) {
        memo[rowKey] = reduceRow(grid, row);
      }

      if (memo[rowKey] > 0) {
        serverCount++;
        continue;
      }

      if (!memo[colKey]) {
        memo[colKey] = reduceCol(grid, col);
      }

      if (memo[colKey] > 0) {
        serverCount++;
      }
    }
  }

  return serverCount;
};
