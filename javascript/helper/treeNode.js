function TreeNode(val) {
    this.val = val;
    this.left = this.right= null;
};

function convertArrayToBinaryTree(array, index = 1) {
    if (index > array.length) return null;

    const value = array[index - 1];
    if (!value) return null;

    const node = new TreeNode(value);
    node.left = convertArrayToBinaryTree(array, index * 2);
    node.right = convertArrayToBinaryTree(array, index * 2 + 1);
    return node;
}

exports.TreeNode = TreeNode;
exports.convertArrayToBinaryTree = convertArrayToBinaryTree;