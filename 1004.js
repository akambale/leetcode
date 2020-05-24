var longestOnes = function (arr, k) {
  let start = 0;
  let end = 0;
  let count = 0; // num of zeros in our sliding window
  let maxLength = 0;

  while (arr[end] !== undefined && arr[start] !== undefined) {
    // if count is less than k, move end pointer down the list
    while (count < k && arr[end] !== undefined) {
      // if the end pointer is zero, increment the zero count
      if (arr[end] === 0) {
        count++;
      }
      // then move end pointer up
      end++;
      if (arr[end] !== undefined || arr[start] !== undefined) break;
    }

    while (arr[end] === 1) end++;

    // when count equals k, calculate the length
    // and update the max length
    maxLength = Math.max(maxLength, end - start);

    while (count === k) {
      //loop until we hit our next 0
      if (arr[start] === 0) {
        count--;
      }
      // increment the starting position every time
      start++;
      if (arr[end] !== undefined || arr[start] !== undefined) break;
    }
  }

  return maxLength;
};
