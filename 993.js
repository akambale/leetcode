const isCousins = (root, x, y) => {
  let nodeXDepth;
  let nodeYDepth;

  let nodeXParent;
  let nodeYParent;

  const recurse = (node, parentVal = null, depth = 0) => {
    if (!node) return;

    if (node.val === x) {
      nodeXDepth = depth;
      nodeXParent = parentVal;
    }

    if (node.val === y) {
      nodeYDepth = depth;
      nodeYParent = parentVal;
    }

    recurse(node.left, node.val, depth + 1);
    recurse(node.right, node.val, depth + 1);
  };
  recurse(root);
  return nodeXDepth === nodeYDepth && nodeXParent !== nodeYParent;
};
