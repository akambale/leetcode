const maxDepth = (root, depth = 1) => {
  if (!root) {
    return depth - 1;
  }

  let leftDepth = maxDepth(root.left, depth + 1);
  let rightDepth = maxDepth(root.right, depth + 1);

  if (leftDepth > rightDepth) {
    return leftDepth;
  }
  return rightDepth;
};

// impoved with Ron's comments
// not as easy to follow the code but this has O(1) space complexity

const maxDepthRevised = root => {
  if (!root) return 0;
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};
