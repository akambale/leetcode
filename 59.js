const generateMatrix = n => {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }
  let num = 1;
  let upperBound = 0;
  let leftBound = 0;
  let lowerBound = n - 1;
  let rightBound = n - 1;
  let row = leftBound;
  let column = upperBound;

  while (num <= Math.pow(n, 2)) {
    for (column = leftBound; column <= rightBound; column++) {
      matrix[row][column] = num;
      num++;
    }
    column--;
    upperBound++;

    for (row = upperBound; row <= lowerBound; row++) {
      matrix[row][column] = num;
      num++;
    }
    row--;
    rightBound--;

    for (column = rightBound; column >= leftBound; column--) {
      matrix[row][column] = num;
      num++;
    }
    column++;
    lowerBound--;

    for (row = lowerBound; row >= upperBound; row--) {
      matrix[row][column] = num;
      num++;
    }
    row++;
    leftBound++;
  }
  return matrix;
};

const foo = generateMatrix(10);
console.table(foo);
