const maxProfit = (prices) => {
  let min = prices[0];
  let max = min;
  let maxDiff = 0
  
  for (let i = 1; i < prices.length; i++) {
    const num = prices[i];
    
    if (num < min) {
      min = num; max = num;
    }
    
    if (num > max) max = num;
    
    let diff = max - min;
    maxDiff = maxDiff > diff ? maxDiff : diff;
  }
  
  return maxDiff;
};
