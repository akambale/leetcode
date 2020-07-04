// O(n) solution

var StreamChecker = function (words) {
  this.store = {};
  words.forEach(word => (this.store[word] = true));
  this.stream = '';
};

StreamChecker.prototype.query = function (letter) {
  this.stream += letter;
  if (this.store[letter]) return true;
  const words = Object.keys(this.store);
  let word;
  let segment;
  for (let i = 0; i < words.length; i++) {
    word = words[i];
    segment = this.stream.slice(this.stream.length - word.length);
    if (segment === word) return true;
  }
  return false;
};

// O(log(n)) solution

var StreamChecker = function (words) {
  this.store = new Trie();
  let reverse;
  words.forEach(word => {
    reverse = word.split('').reverse().join('');
    this.store.addWord(reverse);
  });
  this.stream = '';
};

StreamChecker.prototype.query = function (letter) {
  this.stream += letter;
  let obj = this.store.children;
  let currentLetter;

  for (i = this.stream.length - 1; i >= 0; i--) {
    currentLetter = this.stream[i];
    if (obj[currentLetter]) {
      if (obj[currentLetter].isWord) {
        return true;
      } else {
        obj = obj[currentLetter];
      }
    } else {
      return false;
    }
  }
  return false;
};

const Trie = function () {
  this.children = {};
};

Trie.prototype.addWord = function (word) {
  const firstLetter = word[0];
  if (this.children[firstLetter]) {
    this.children[firstLetter].addWord(word.slice(1));
  } else {
    this.children[firstLetter] = new TrieNode();
    this.children[firstLetter].addWord(word.slice(1));
  }
};

const TrieNode = function () {
  this.isWord = false;
};

TrieNode.prototype.addWord = function (word) {
  if (word.length === 0) {
    this.isWord = true;
    return;
  }
  if (!this[word.slice(0, 1)]) {
    this[word.slice(0, 1)] = new TrieNode();
  }
  this[word.slice(0, 1)].addWord(word.slice(1));
};
