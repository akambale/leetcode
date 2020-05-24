const longestPalindromeSubseq = str => {
  const memo = {};
  const recurse = (left, right) => {
    const key = `${left} ${right}`;
    if (memo[key]) {
      // return is at end
    } else if (right === left) {
      return 1;
    } else if (left === right - 1 && str[left] === str[right]) {
      return 2;
    } else if (str[left] === str[right]) {
      memo[key] = 2 + recurse(left + 1, right - 1);
    } else {
      memo[key] = Math.max(recurse(left + 1, right), recurse(left, right - 1));
    }
    return memo[key];
  };
  return recurse(0, str.length - 1);
};
