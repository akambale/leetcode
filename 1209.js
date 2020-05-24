const isSubStrAllSameLetter = (str, k) => {
  if (str.length < k) return { bool: false, index: str.length };
  let i;
  for (i = 1; i < str.length; i++) {
    if (str[i] !== str[0]) {
      return { bool: false, index: i };
    }
  }
  return { bool: true, index: i };
};

const removeDuplicates = (str, k) => {
  if (str.length < k) return str;
  let result = '';
  let segment;
  let i = 0;
  let noDeletedSegment = true;
  while (i < str.length) {
    segment = str.slice(i, i + k);
    const { bool, index } = isSubStrAllSameLetter(segment, k);
    if (bool) {
      noDeletedSegment = false;
    } else {
      result += segment.slice(0, index);
    }
    i += index;
  }
  if (noDeletedSegment) return str;
  return removeDuplicates(result, k);
};
