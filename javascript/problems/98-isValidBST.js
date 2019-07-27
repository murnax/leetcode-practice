/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (!root) return true;
    let rootVal = root.val;
    function helper(root, child) {
        let valid = true;
        if (!root) return true;
        if (child && child === 'left' && root.val >= rootVal) valid = false;
        if (child && child === 'right' && root.val <= rootVal) valid = false;
        if (root.left && root.left.val >= root.val) valid = false;
        if (root.right && root.right.val <= root.val) valid = false;
        return valid && helper(root.left, child) && helper(root.right, child);
    }
    return helper(root.left, 'left') && helper(root.right, 'right') && isValidBST(root.left) && isValidBST(root.right);
};
module.exports = isValidBST;