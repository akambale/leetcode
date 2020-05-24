const leftMostColumnWithOne = bm => {
  let [row, col] = bm.dimensions();
  let finalRow = -1;
  row--;
  col--;

  while (row >= 0 && col >= 0) {
    if (bm.get(row, col) === 1) {
      finalRow = col;
      col--;
    } else {
      row--;
    }
  }
  return finalRow;
};
