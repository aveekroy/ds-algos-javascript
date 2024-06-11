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

  BFS() {
    let node = this.root
    let data = []
    let queue = []
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
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

console.log(tree.BFS())
