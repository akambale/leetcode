const rev = str => str.split('').reverse().join('');

const reverseParentheses = str => {
  while (true) {
    let lastOpenIndex;
    let noChange = true;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') lastOpenIndex = i;
      if (str[i] === ')') {
        str =
          str.slice(0, lastOpenIndex) +
          rev(str.slice(lastOpenIndex + 1, i)) +
          str.slice(i + 1);
        noChange = false;
        break;
      }
    }
    if (noChange) return str;
  }
};
