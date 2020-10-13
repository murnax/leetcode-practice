function TreeNode(val) {
    this.val = val;
    this.left = this.right= null;
};

Array.prototype.toBinaryTree = function() {
    return _createBinaryTree(this);
}

function _createBinaryTree(array, index = 1) {
    if (index > array.length) return null;

    const value = array[index - 1];
    if (!value) return null;

    const node = new TreeNode(value);
    node.left = _createBinaryTree(array, index * 2);
    node.right = _createBinaryTree(array, index * 2 + 1);
    return node;
}

exports.TreeNode = TreeNode;