var LRUCache = function (capacity) {
  this.store = {};
  this.lru = null;
  this.size = 0;
  this.capacity = capacity;
  this.order = [];
};

LRUCache.prototype.get = function (key) {
  // console.log(this.store);
  if (this.store[key]) {
    // push this key value pair to the top of the lru list
    let index = this.order.indexOf(key);
    this.order.splice(index, 1);
    this.order.push(key);

    return this.store[key];
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.store[key]) {
    const index = this.order.indexOf(key);
    this.order.splice(index, 1);
  } else if (this.size === this.capacity) {
    // remove the lru
    // reset the lru to the next most recently added thing
    const keyToRemove = this.order.shift();
    delete this.store[keyToRemove];
  } else {
    // if we haven't reached the capacity, increment it
    this.size++;
  }
  this.store[key] = value;
  this.order.push(key);
};
