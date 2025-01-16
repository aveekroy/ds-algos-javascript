class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = null
    this.tail = null
    this.length = 0
  }

  printList() {
    let temp = this.head
    while (temp !== null) {
      console.log(temp.value)
      temp = temp.next
    }
  }

  push(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  // Adding a node to the beginning of the LL
  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // Removing a node from the beginning of the LL
  shift() {
    if (!this.head) return undefined
    let currHead = this.head
    this.head = currHead.next
    currHead.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currHead
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let curr = this.head
    for (let i = 0; i < index; i++) {
      curr = curr.next
    }
    return curr
  }
  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = value
      return true
    }
    return false
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) return false
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)
    const newNode = new Node(value)
    const prev = this.get(index - 1)
    prev.next = newNode
    newNode.next = prev.next
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
    const prevNode = this.get(index - 1)
    const removed = prevNode.next
    prevNode.next = removed.next
    removed.next = null
    this.length--
    return true
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return this
  }
}

let list = new LinkedList()
console.log(list)
console.log('------ PUSH ------')
console.log(list.push(5))
console.log(list.push(6))
console.log(list.push(7))
console.log('------ POP ------')
console.log(list.pop())
console.log('------ UNSHIFT ------')
console.log(list.unshift(3))
console.log('------ SHIFT ------')
console.log(list.shift())
console.log('------ GET ------')
console.log(list.get(0))
console.log('------ SET ------')
console.log(list.set(1, 9))
console.log(list)
console.log('------ INSERT ------')
console.log(list.insert(1, 8))
console.log(list)
console.log('------ REMOVE ------')
console.log(list.remove(1))
console.log(list)
console.log('------ REVERSE ------')
console.log(list.reverse())
console.log('------ PRINT LL ------')
console.log(list.printList())
console.log('--------------')

// console.log(list.push('Hello'))
