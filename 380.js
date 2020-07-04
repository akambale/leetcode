var RandomizedSet = function () {
  this.store = {};
  this.arrStore = [];
  this.count = -1;
};

RandomizedSet.prototype.insert = function (val) {
  if (this.store[val] === undefined) {
    this.count++;
    this.store[val] = this.count;
    this.arrStore.push(val);
    return true;
  }
  return false;
};

RandomizedSet.prototype.remove = function (val) {
  if (this.store[val] !== undefined) {
    // get the position of the target value in the array
    const position = this.store[val];

    // get the value of the last element in the array
    const lastElement = this.arrStore[this.arrStore.length - 1];

    // over write the target value with the lastElement value, therefore 'deleteing it'
    this.arrStore[position] = lastElement;

    // update the position of the fomrerly last element
    this.store[lastElement] = position;

    // remove the duplicate last element from the array and update the count to reflect this
    this.arrStore.pop();
    this.count--;

    //remove target value from and object
    delete this.store[val];

    return true;
  }
  return false;
};

RandomizedSet.prototype.getRandom = function () {
  return this.arrStore[Math.floor(Math.random() * this.arrStore.length)];
};
