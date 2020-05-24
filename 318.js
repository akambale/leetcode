const wordSet = word => {
  const set = new Set();
  for (let i = 0; i < word.length; i++) {
    set.add(word[i]);
  }
  return [set, word.length];
};

const areWordsDifferent = (word1, word2) => {
  const [set1] = word1;
  const [set2] = word2;
  let smallerSet;
  let largerSet;
  let result = true;
  if (set1.size > set2.size) {
    smallerSet = set1;
    largerSet = set2;
  } else {
    smallerSet = set2;
    largerSet = set1;
  }

  smallerSet.forEach(val => {
    if (largerSet.has(val)) {
      result = false;
    }
  });

  return result;
};

const maxProduct = words => {
  let maxVal = 0;
  let outerWord;
  let innerWord;
  let product;
  const arr = words.map(word => wordSet(word));
  for (let i = 0; i < arr.length; i++) {
    outerWord = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      innerWord = arr[j];
      if (areWordsDifferent(outerWord, innerWord)) {
        product = outerWord[1] * innerWord[1];
        if (product > maxVal) {
          maxVal = product;
        }
      }
    }
  }

  return maxVal;
};
