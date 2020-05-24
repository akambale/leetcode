var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;
  let next;
  for (let i = 1; i < prices.length; i++) {
    next = prices[i + 1] || -Infinity;
    if (min < prices[i] && prices[i] > next) {
      profit += prices[i] - min;
      min = prices[i + 1];
      i++;
    } else {
      min = Math.min(prices[i], min);
    }
  }
  return profit;
};
