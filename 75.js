const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const insert = arr => {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      i--;
      continue;
    } else {
      i++;
    }
  }
};

const sortColors = nums => {
  insert(nums);
};
