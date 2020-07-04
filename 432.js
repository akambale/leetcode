/**
 * Initialize your data structure here.
 */
var AllOne = function () {
  this.store = {};
  this.bucket = {};
  this.bucketSize = {};
  this.numKeys = 0;
  this.maxBucket = -Infinity;
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  if (this.store[key]) {
    this.removeFromBucket(key);
    this.store[key]++;
  } else {
    this.store[key] = 1;
    this.numKeys++;
  }
  this.addToBucket(key);
};

AllOne.prototype.addToBucket = function (key) {
  // get the count of the key
  const bucketVal = this.store[key];
  // if that count doesn't exisit, eg, no key has
  // been added to the data structure 5 times before
  // this time, create that bucket
  if (this.bucket[bucketVal] === undefined) {
    this.bucket[bucketVal] = {};
    this.bucketSize[bucketVal] = 0;
  }
  this.bucketSize[bucketVal]++;
  this.bucket[bucketVal][key] = true;

  this.maxBucket = Math.max(this.maxBucket, bucketVal);
};

// this method will be invoked before we increase
// the frequencey count of the key in the store
AllOne.prototype.removeFromBucket = function (key) {
  // get the count of the key
  const bucketVal = this.store[key];
  // safe delete
  if (this.bucket[bucketVal][key]) {
    this.bucketSize[bucketVal]--;
    delete this.bucket[bucketVal][key];

    // if there are no keys left in the bucket, delete it
    if (this.bucketSize[bucketVal] === 0) {
      delete this.bucket[bucketVal];
      delete this.bucketSize[bucketVal];

      // if this bucketSize is now 0 and it's equal to the maxBucket
      if (bucketVal === this.maxBucket) {
        // decrement the maxBucket
        this.maxBucket--;
        if (this.maxBucket === 0) this.maxBucket = -Infinity;
      }
    }
  }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure.
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  if (this.store[key] > 1) {
    this.removeFromBucket(key);
    this.store[key]--;
    this.addToBucket(key);
  } else if (this.store[key] === 1) {
    this.removeFromBucket(key);
    delete this.store[key];
    this.numKeys--;
  }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  if (this.maxBucket === -Infinity) return '';
  return getFirstKey(this.bucket[this.maxBucket]);
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  // this method relies on numeric keys ordering in JS
  // the lowest integer key will always be the first one
  const smallestBucket = getFirstKey(this.bucket);
  if (smallestBucket !== null) {
    return getFirstKey(this.bucket[smallestBucket]);
  }
  return '';
};

const getFirstKey = obj => {
  for (let key in obj) {
    return key;
  }
  return null;
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */

const p = new AllOne();
p.inc('foo');
p.inc('bar');
p.inc('baz');
p.inc('foo');
p.inc('foo');

console.log(p);
