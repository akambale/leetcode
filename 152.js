//brute force solution that passes most test cases
const getProd = arr => arr.reduce((a, b) => a * b, 1);

const maxProduct = nums => {
  if (nums.length === 0) return 0;
  let max = nums[0];
  let segment;

  for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i <= nums.length; i++) {
      segment = nums.slice(j, i);
      if (segment.length === 0) continue;
      max = Math.max(getProd(segment), max);
    }
  }

  return max;
};

// Gabe's solution that I copied

const maxProduct = nums => {
  let max = -Infinity;
  let num;
  const store = {};
  for (let i = 0; i < nums.length; i++) {
    const [prevMaxPos, prevMaxNeg] = store[i - 1] ? store[i - 1] : [1, 1];
    num = nums[i];
    const maxPos = Math.max(num, prevMaxPos * num, prevMaxNeg * num);
    const maxNeg = Math.min(num, prevMaxPos * num, prevMaxNeg * num);
    store[i] = [maxPos, maxNeg];
    max = Math.max(num, maxPos, max);
  }
  return max;
};
