const tree2str = node => {
  if (!node) return '';
  if (!node.left && !node.right) return node.val.toString();
  if (node.left && !node.right) return `${node.val}(${tree2str(node.left)})`;
  return `${node.val}(${tree2str(node.left)})(${tree2str(node.right)})`;
};
