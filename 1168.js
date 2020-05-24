var invalidTransactions = function (arr) {
  const store = {};
  const invalid = [];
  // prevents string from being added twice
  const safeAdd = str => {
    if (!invalid.includes(str)) invalid.push(str);
  };

  for (let i = 0; i < arr.length; i++) {
    const [name, time, amount, city] = arr[i].split(',');
    if (!store[name]) store[name] = [];
    store[name].push([time, city, arr[i]]);
    if (amount > 1000) {
      invalid.push(arr[i]);
    }
  }

  for (let key in store) {
    const arr = store[key];
    arr.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        // compares each transaction to each other transaction with the same name. Adds them both to invalid list if they meet this condition
        if (Math.abs(arr[i][0] - arr[j][0]) <= 60 && arr[i][1] !== arr[j][1]) {
          safeAdd(arr[i][2]);
          safeAdd(arr[j][2]);
        }
      }
    }
  }

  return invalid;
};
