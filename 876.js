// Time: O(n) single pass
// Space: O(n)
const middleNode = head => {
  const arr = [];
  while (head !== null) {
    arr.push(head);
    head = head.next;
  }
  return arr[Math.floor(arr.length / 2)];
};

// Time: O(n) double pass
// Space: O(1)
const middleNode = head => {
  let count = 0;
  let node = head;
  while (node !== null) {
    node = node.next;
    count++;
  }
  let halfCount = Math.floor(count / 2);
  node = head;
  while (halfCount !== 0) {
    node = node.next;
    halfCount--;
  }
  return node;
};
