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

  contains(value) {
    if (this.root === null) return false
    let curr = this.root
    while (curr) {
      if (value < curr.value) {
        curr = curr.left
      } else if (value > curr.value) {
        curr = curr.right
      } else {
        return true
      }
    }
    return false
  }
}

let tree = new BST()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

console.log(tree)
console.log(tree.root.left)
console.log(tree.root.right)

console.log(tree.contains(16))
console.log(tree.contains(100))
