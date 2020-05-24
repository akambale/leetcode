const eval = str => {
  sum = 0;
  i = 0;
  let char;
  let numSoFar = '';

  if (str[0] === '-' || str[0] === '+') {
    numSoFar = str[0];
    i = 1;
  }
  while (i <= str.length) {
    char = str[i];
    if (char === '+' || char === '-' || char === undefined) {
      sum += parseInt(numSoFar);
      numSoFar = '';
    }
    numSoFar += char;
    i++;
  }
  return sum;
};

const calculate = s => {
  let left;
  let right;
  let char;
  let newVal;

  s = s.split(' ').join('');
  while (s.includes('(')) {
    // find parenthesis segment
    for (let i = 0; i < s.length; i++) {
      char = s[i];
      if (char === '(') left = i;
      if (char === ')') {
        right = i;
        break;
      }
    }
    newVal = eval(s.slice(left + 1, right)).toString();
    left = s.slice(0, left);
    right = s.slice(right + 1);
    s = left + newVal + right;
    s = s
      .split('+-')
      .join('+0-')
      .split('-+')
      .join('-')
      .split('++')
      .join('+')
      .split('--')
      .join('+');
  }
  return eval(s);
};
