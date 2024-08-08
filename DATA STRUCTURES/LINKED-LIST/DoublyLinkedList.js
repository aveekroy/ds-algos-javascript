class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }

  // Removing a node from the beginning of the DLL
  shift() {
    if (!this.head) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      this.head.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }

  // Adding a node to the beginning of the DLL
  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let count
    let curr
    if (index <= this.length / 2) {
      count = 0
      curr = this.head
      while (count !== index) {
        curr = curr.next
        count++
      }
    } else {
      count = this.length - 1
      curr = this.tail
      while (count !== index) {
        curr = curr.prev
        count--
      }
    }
    return curr
  }

  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode !== null) {
      foundNode.value = val
      return true
    }
    return false
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return null
    }
    if (index === 0) {
      return this.unshift(val)
    }
    if (index === this.length) {
      return this.push(val)
    }
    let newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next
    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    let removedNode = this.get(index)
    removedNode.prev.next = removedNode.next
    removedNode.next.prev = removedNode.prev
    removedNode.next = null
    removedNode.prev = null
    return true
  }
}
