const pair = {
  '{': '}',
  '(': ')',
  '[': ']',
};

const isValid = s => {
  const stack = [s];

  while (stack.length > 0) {
    const str = stack.pop();
    if (str === '') continue;
    const target = pair[str[0]];
    let pairFound = false;
    let count = 0;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[0]) count++;
      if (str[i] === target) {
        if (count !== 0) {
          count--;
        } else {
          stack.push(str.slice(1, i));
          stack.push(str.slice(i + 1));
          i = str.length;
          pairFound = true;
        }
      }
    }
    if (!pairFound) return false;
  }
  return true;
};
