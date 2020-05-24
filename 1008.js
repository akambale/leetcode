class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  addChild(val) {
    if (val > this.val) {
      if (this.right === null) {
        this.right = new TreeNode(val);
      } else {
        this.right.addChild(val);
      }
    } else {
      if (this.left === null) {
        this.left = new TreeNode(val);
      } else {
        this.left.addChild(val);
      }
    }
  }
}

const bstFromPreorder = preorder => {
  const head = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    head.addChild(preorder[i]);
  }
  return head;
};
