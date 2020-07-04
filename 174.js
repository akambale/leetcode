// Brute force recursive solution
var calculateMinimumHP = function (dungeon) {
  const maxRow = dungeon.length - 1;
  const maxCol = dungeon[0].length - 1;
  const recurse = (row = 0, col = 0, sum = 0, neg = 0) => {
    if (row > maxRow || col > maxCol) {
      return -Infinity;
    }

    sum += dungeon[row][col];
    neg = Math.min(sum, neg);

    if (row === maxRow && col === maxCol) {
      return neg;
    }

    return Math.max(
      recurse(row + 1, col, sum, neg),
      recurse(row, col + 1, sum, neg),
    );
  };
  return recurse() * -1 + 1;
};

const firstSquare = (dungeon, row, col) => {
  let val = dungeon[row][col];
  const neg = val < 0 ? val : 0;
  return {
    neg,
    health: neg,
  };
};

const compare = (val1, val2) => {
  const currentHealth = val1.health;
  const currentNeg = val1.neg;
  // if (val2 < 0 && val1 < 0) {
  return val2 + val1;
  // }
  // if (val2 < 0 && val1 >= 0) {
  //   return val2;
  // }
  // return 0;
  // val1 >= val2 ? 1 : val2 - val1;
};

const compareLeft = (dungeon, row, col) => {
  return compare(dungeon[row][col], dungeon[row][col - 1]);
};

const compareUp = (dungeon, row, col) => {
  return compare(dungeon[row][col], dungeon[row - 1][col]);
};

var calculateMinimumHP = function (dungeon) {
  let numRows = dungeon.length;
  let numCols = dungeon[0].length;

  console.table(dungeon);

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (row === 0 && col === 0) {
        dungeon[row][col] = firstSquare(dungeon, row, col);
        continue;
      }

      if (row === 0) {
        dungeon[row][col] = compareLeft(dungeon, row, col);
        continue;
      }

      if (col === 0) {
        dungeon[row][col] = compareUp(dungeon, row, col);
        continue;
      }

      dungeon[row][col] = Math.min(
        compareLeft(dungeon, row, col),
        compareUp(dungeon, row, col),
      );
    }
  }
  console.log('mine');
  console.table(dungeon);
  return dungeon[numRows - 1][numCols - 1] * -1 + 1;
};

const ans = calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5],
]);
console.log(ans, 7, ans === 7);
