const moveZeroes = nums => {
  const bubbleUp = zeroIndex => {
    for (let i = zeroIndex; i < nums.length - 1; i++) {
      if (nums[i + 1] === 0) return;
      [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
    }
  };
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0) bubbleUp(i);
  }
};
