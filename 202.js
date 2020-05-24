const isHappy = n => {
  const store = {};
  let str;
  let sum = 0;

  const recurse = num => {
    if (num === 1) {
      return true;
    }

    str = num.toString();
    if (store[str]) {
      return false;
    }

    for (let i = 0; i < str.length; i++) {
      sum += Math.pow(parseInt(str[i]), 2);
    }

    store[str] = sum;
    sum = 0;
    return recurse(store[str]);
  };

  return recurse(n);
};
