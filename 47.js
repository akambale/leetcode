const permuteUnique = nums => {
  const store = {};
  let key;

  const addToStore = arr => {
    key = arr.join('');
    if (!store[key]) {
      store[key] = arr;
    }
  };

  let remainCopy;
  let permCopy;
  let num;
  const recurse = (remainArr, permutation = []) => {
    if (remainArr.length === 0) {
      addToStore(permutation);
      return;
    }

    for (let i = 0; i < remainArr.length; i++) {
      remainCopy = remainArr.slice();
      permCopy = permutation.slice();
      num = remainCopy.splice(i, 1);
      permCopy.push(num[0]);
      recurse(remainCopy, permCopy);
    }
  };
  recurse(nums);

  const results = [];
  for (key in store) {
    results.push(store[key]);
  }

  return results;
};
