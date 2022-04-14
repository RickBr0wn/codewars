// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:

// Input: root = [4,2,7,1,3], val = 5
// Output: []

module.exports = function searchBinarySearchTree(root, val) {
  if (root === null) {
    return null
  }

  if (val === root.val) {
    return root
  }

  if (root.val < val) {
    return searchBinarySearchTree(root.right, val)
  } else {
    return searchBinarySearchTree(root.left, val)
  }
}
