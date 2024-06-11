class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }
    let curr = this.root
    while (true) {
      if (value === curr.value) return undefined
      if (value < curr.value) {
        if (curr.left === null) {
          curr.left = newNode
          return this
        }
        curr = curr.left
      } else if (value > curr.value) {
        if (curr.right === null) {
          curr.right = newNode
          return this
        }
        curr = curr.right
      }
    }
  }

  DFSPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }

  DFSPostOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  DFSInOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

//            10
//      5           13
//  2       7   11      16

let tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree.DFSPreOrder())
console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())
