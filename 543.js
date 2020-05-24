const diameterOfBinaryTree = root => {
  let max = 0;
  const recurse = node => {
    if (!node) return 0;
    const leftDepth = recurse(node.left);
    const rightDepth = recurse(node.right);
    max = Math.max(leftDepth + rightDepth, max);
    return Math.max(leftDepth, rightDepth) + 1;
  };
  recurse(root);
  return max;
};
