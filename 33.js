const search = (nums, target) => {
  if (nums.length === 0) return -1;
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let lastIndex = nums.length - 1;
  let lastIndexVal = nums[lastIndex];

  let midPoint;
  let midVal;
  let minVal;
  let maxVal;
  let nextVal;

  const findRotIndex = (min, max) => {
    if (min === max) {
      return 0;
    }

    midPoint = Math.floor((max - min) / 2 + min);
    midVal = nums[midPoint];
    nextVal = nums[midPoint + 1];
    minVal = nums[min];
    maxVal = nums[max];

    if (midVal > nextVal) {
      return midPoint + 1;
    }

    if (midVal > maxVal) {
      return findRotIndex(midPoint, max);
    }

    return findRotIndex(min, midPoint);
  };

  const recurse = (min, max) => {
    midPoint = Math.floor((max - min) / 2 + min);
    midVal = nums[midPoint];

    if (midVal === target) {
      return midPoint;
    }

    if (nums[midPoint + 1] === target) {
      return midPoint + 1;
    }

    if (max - min <= 1) {
      if (nums[max] === target) return max;
      if (nums[min] === target) return min;
      return -1;
    }

    if (target > midVal) {
      return recurse(midPoint, max);
    }

    return recurse(min, midPoint);
  };

  const rotIndex = findRotIndex(0, lastIndex);
  if (target <= lastIndexVal) {
    return recurse(rotIndex, lastIndex);
  }

  return recurse(0, rotIndex - 1);
};
