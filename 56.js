var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    const [lower, upper] = intervals[i];
    const [nLower, nUpper] = intervals[i + 1];
    if (upper >= nLower) {
      intervals[i] = [Math.min(lower, nLower), Math.max(nUpper, upper)];
      intervals.splice(i + 1, 1);
      i--;
    }
  }
  return intervals;
};
