// You are given two nodes, p and q. The task is to return their lowest common ancestor (LCA).
// Both nodes have a reference to their parent node.
// The tree’s root is not provided; you must use the parent pointers to find the nodes’ common ancestor.

class EduTreeNode {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
    this.parent = null
  }
}

class EduBinaryTree {
  constructor(nodes) {
    this.root = this.createBinaryTree(nodes)
  }

  createBinaryTree(nodes) {
    if (!nodes || nodes[0] === null) {
      return null
    }
    const root = new EduTreeNode(nodes[0])
    const queue = [root]
    let i = 1
    while (i < nodes.length) {
      const curr = queue.shift()
      if (i < nodes.length && nodes[i] !== null) {
        curr.left = new EduTreeNode(nodes[i])
        curr.left.parent = curr
        queue.push(curr.left)
      }
      i++
      if (i < nodes.length && nodes[i] !== null) {
        curr.right = new EduTreeNode(nodes[i])
        curr.right.parent = curr
        queue.push(curr.right)
      }
      i++
    }
    return root
  }

  find(root, value) {
    if (!root) {
      return null
    }
    const queue = [root]
    while (queue.length) {
      const currentNode = queue.shift()
      if (currentNode.data === value) {
        return currentNode
      }
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return null
  }
}

// Printing functions
function isIdenticalTree(node1, node2) {
  if (node1 === null && node2 === null) {
    return true
  } else if (node1 !== null && node2 !== null) {
    return (
      node1.data === node2.data &&
      isIdenticalTree(node1.left, node2.left) &&
      isIdenticalTree(node1.right, node2.right)
    )
  } else {
    return false
  }
}

function getLevelOrder(root) {
  if (root === null) {
    return 'None'
  }
  const queue = [root]
  const levelOrderList = []
  while (queue.length) {
    const temp = queue.shift()
    levelOrderList.push(temp.data)
    if (temp.left !== null) {
      queue.push(temp.left)
    }
    if (temp.right !== null) {
      queue.push(temp.right)
    }
  }
  return levelOrderList.join(', ')
}

function getInOrder(root) {
  if (root === null) {
    return 'None'
  }
  const result = []
  function inOrderRec(node) {
    if (node === null) {
      return
    }
    inOrderRec(node.left)
    result.push(`${result.length}${node.data}`)
    inOrderRec(node.right)
  }
  inOrderRec(root)
  return result.join(', ')
}

function lowestCommonAncestor(p, q) {
  // Initialize two pointers
  let ptr1 = p
  let ptr2 = q
  // Traverse until they meet
  while (ptr1 !== ptr2) {
    // Move ptr1 to parent node or switch to the other node if reached the root
    if (ptr1.parent) {
      ptr1 = ptr1.parent
    } else {
      ptr1 = q
    }

    // Move ptr2 to parent node or switch to the other node if reached the root
    if (ptr2.parent) {
      ptr2 = ptr2.parent
    } else {
      ptr2 = p
    }
  }

  // Return ptr1 or ptr2, since they are the same at this point
  return ptr1
}

// Driver code
function main() {
  const inputTrees = [
    [100, 50, 200, 25, 75, 350],
    [100, 200, 75, 50, 25, 350],
    [350, 100, 75, 50, 200, 25],
    [100, 50, 200, 25, 75, 350],
    [25, 50, 75, 100, 200, 350],
  ]
  const inputNodes = [
    [25, 75],
    [50, 350],
    [100, 200],
    [50, 25],
    [350, 200],
  ]
  for (let i = 0; i < inputTrees.length; i++) {
    let tree = new EduBinaryTree(inputTrees[i])
    console.log(`${i + 1}.\tBinary tree:`)
    // displayTree(tree.root)
    console.log(`\n\tp = ${inputNodes[i][0]}`)
    console.log(`\tq = ${inputNodes[i][1]}`)

    const p = tree.find(tree.root, inputNodes[i][0])
    const q = tree.find(tree.root, inputNodes[i][1])

    const lca = lowestCommonAncestor(p, q)
    console.log(`\n\tLowest common ancestor: ${lca.data}`)
    console.log('-'.repeat(100))
  }
}

main()
