// Approach:
// A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle,
// where elements are inserted at the rear (enqueue) and removed from the front (dequeue) of the queue.
// It’s commonly used for implementing algorithms involving breadth-first search, scheduling, and resource allocation.

// Steps to Implement:
// 1. Define the queue data structure with operations such as enqueue, dequeue, peek, and isEmpty.
// 2. Use the queue to store elements and perform operations based on the FIFO principle.
// 3. Handle queue underflow and overflow conditions as needed.
// 4. Implement algorithms or operations that require a queue efficiently.

// When to Use:
// - Problems involving sequential processing or ordering of elements.
// - Implementing algorithms such as breadth-first search, scheduling, or resource allocation.

// Tips:
// - Choose the appropriate data structure based on the problem requirements and constraints.
// - Implement queue-based algorithms efficiently using the queue data structure and appropriate operations.

// Use Case:
// Problem: Implement a queue-based algorithm to perform level-order traversal of a binary tree.

function levelOrderTraversal(root) {
  if (!root) return []
  const queue = [root]
  const result = []
  while (queue.length > 0) {
    const node = queue.shift()
    result.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return result
}

// Example:
//     1
//    / \
//   2   3
//      / \
//     null   null

// Output: [1, 2, 3]
tree = {
  val: 1,
  left: { val: 2, left: null, right: null },
  right: { val: 3, left: null, right: null },
}
console.log(levelOrderTraversal(tree))
// Output: [1, 2, 3]
