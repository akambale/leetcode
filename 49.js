const helper = str => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) obj[str[i]] = 0;
    obj[str[i]]++;
  }
  let s = '';
  let arr = [];
  for (const key in obj) {
    arr.push(`${key}-${obj[key]}`);
  }
  arr.sort();
  return arr.join('');
};

const groupAnagrams = strs => {
  const obj = {};
  strs.forEach(str => {
    const s = helper(str);
    if (!obj[s]) obj[s] = [];
    obj[s].push(str);
  });
  const arr = [];
  for (const key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};
