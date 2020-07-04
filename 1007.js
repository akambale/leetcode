const hashRow = row => {
  const store = {};
  row.forEach(domino => {
    if (store[domino]) {
      store[domino]++;
    } else {
      store[domino] = 1;
    }
  });

  return store;
};

const minDominoRotations = (A, B) => {
  if (A.length <= 1) return 0;
  // hash each row
  const aStore = hashRow(A);
  const bStore = hashRow(B);
  // combine each row to see if there is enough dominos per row
  const valsToCheck = [];
  for (let key in aStore) {
    if (aStore[key] + bStore[key] >= A.length) {
      valsToCheck.push(key);
    }
  }
  //for those valid combos, do an interative swap test across all to see if there is a valid output
  let val;
  let i = 0;
  let leastSwapCount = Infinity;
  let swapCount = 0;
  let inverseSwapCount = 0;
  valsToCheck.forEach(val => {
    val = parseInt(val);
    for (i = 0; i < A.length; i++) {
      if (val !== A[i] && val !== B[i]) {
        break;
      }

      if (val === B[i] && val !== A[i]) {
        swapCount++;
      }

      if (val !== B[i] && val === A[i]) {
        inverseSwapCount++;
      }
    }
    if (i === A.length) {
      leastSwapCount = Math.min(inverseSwapCount, swapCount, leastSwapCount);
    }
    swapCount = 0;
    inverseSwapCount = 0;
  });
  return leastSwapCount === Infinity ? -1 : leastSwapCount;
};
