// https://leetcode.com/problems/univalued-binary-tree/discuss/211946/Adorable-Baby-JavaScript-solution-beats-100
var isUnivalTree = function(root) {
    const val = root.val
    const queue = [root]
    while (queue.length) {
        let current = queue.shift()
        if (current.val !== val) {
            return false
        } 
        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }
        return true
    }
};

// https://leetcode.com/problems/univalued-binary-tree/discuss/211440/Simple-traversal-solution-(javascript)-52-ms
var isUnivalTree = root => {
    let isUnival = true
    let rootValue = root.val

    const traversal = node => {
        if (!node) {
            return
        }

        if (node.val !== rootValue) {
            isUnival = false
            return
        }

        traversal(node.left)
        traversal(node.right)
    }
    traversal(root)

    return isUnival
}