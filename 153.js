const findMin = nums => {
  if (nums.length === 1) {
    return nums[0];
  }

  let midPoint;

  const findRotIndex = (min, max) => {
    if (min === max) {
      return 0;
    }

    midPoint = Math.floor((max + min) / 2);

    if (nums[midPoint] > nums[midPoint + 1]) {
      return midPoint + 1;
    }

    if (nums[midPoint] > nums[max]) {
      return findRotIndex(midPoint, max);
    }

    return findRotIndex(min, midPoint);
  };

  return nums[findRotIndex(0, nums.length - 1)];
};
