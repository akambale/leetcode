var findMin = function (nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) {
    return nums[0];
  }

  let lastIndex = nums.length - 1;
  let lastIndexVal = nums[lastIndex];

  let midPoint;
  let midVal;
  let minVal = nums[0];
  let maxVal = nums[nums.length - 1];
  let nextVal;
  let currentVal;

  if (minVal === maxVal) {
    for (let i = nums.length - 1; i > 0; i--) {
      currentVal = nums[i];
      nextVal = nums[i - 1];
      console.log(currentVal, minVal, nextVal);
      if (currentVal < minVal && currentVal < nextVal) {
        return nums[i];
      }
    }
    return nums[0];
  }

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

  const rotIndex = findRotIndex(0, nums.length - 1);
  return nums[rotIndex];
};
