// my very ugly way of trying to check which two strings were greater
// in cases like '121' vs '12' and '3' vs '34'
// I never got this function fully working

// const isLongerElementIsGreater = (longer, shorter) => {
//   let longerIndex = 0;
//   let shorterIndex = 0;
//   let shorterChar;
//   let longerChar
//   while(longer.length >= longerIndex && shorter.length >= shorterIndex) {
//     shorterChar = shorter[shorterIndex];
//     longerChar = longer[longerIndex];

//     if (shorterIndex === shorter.length - 1) {
//       if (shorterChar > longer[longerIndex + 1]) return false;
//     }
//     if (longerChar === shorterChar) {
//       longerIndex++;
//       shorterIndex++;
//       continue;
//     }
//     if (shorterChar > longerChar) {
//       // -1 will indicate that the shorter element passed in
//       // is greater;
//       return false;
//     } else {
//       shorterIndex++
//     }
//   }
//   return true;
// }

// the stupid simple final solution to comparing two numbers
// that start with the same character.
const isLongerElementIsGreater = (longer, shorter) => {
  if (longer + shorter > shorter + longer) {
    return true;
  }
  return false;
};

// 97.54% percentile of time and 100% percentile of memory.
const largestNumber = nums => {
  const sortCB = (a, b) => {
    if (a.length === b.length) {
      if (a > b) {
        return -1;
      } else {
        return 1;
      }
    }

    if (a[0] === b[0]) {
      //paralell check
      let longer;
      let shorter;
      if (a.length > b.length) {
        longer = a;
        shorter = b;
      } else {
        longer = b;
        shorter = a;
      }
      const longerElementIsGreater = isLongerElementIsGreater(longer, shorter);
      if (longerElementIsGreater && longer === a) {
        return -1;
      } else if (longerElementIsGreater && longer === b) {
        return 1;
      } else if (!longerElementIsGreater && longer === a) {
        return 1;
      } else {
        return -1;
      }
    }

    if (a > b) {
      return -1;
    } else {
      return 1;
    }
  };
  let result = nums
    .map(ele => ele.toString())
    .sort(sortCB)
    .join('');

  //snipping those pesky zeros from the start
  let i;
  for (i = 0; i < result.length - 1; i++) {
    if (result[i] !== '0') {
      break;
    }
  }
  return result.slice(i);
};

// and once I came to that realization, I realized all my other logic was uselss. Here is a incredibly simple way to solve this problem though my time dropped down to 78.52% percentile
const largestNumber = nums => {
  const sortCB = (a, b) => {
    if (a + b > b + a) {
      return -1;
    }
    return 1;
  };
  let result = nums
    .map(ele => ele.toString())
    .sort(sortCB)
    .join('');

  //snipping those pesky zeros from the start
  let i;
  for (i = 0; i < result.length - 1; i++) {
    if (result[i] !== '0') {
      break;
    }
  }
  return result.slice(i);
};
