class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
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
    let temp = this.head
    let pre = this.head
    while (temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return this
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
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined
    }
    let temp = this.head
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }
  set(index, value) {
    let temp = this.get(index)
    if (temp) {
      temp.value = value
      return true
    }
    return false
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) return false
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)
    const newNode = new Node(value)
    const temp = this.get(index - 1)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false
    if (index === this.length) return this.pop()
    if (index === 0) return this.shift()
    const before = this.get(index - 1)
    const temp = before.next
    before.next = temp.next
    temp.next = null
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

let list = new LinkedList(4)
console.log(list)
console.log('--------------')
console.log(list.push(5))
console.log(list.push(6))
console.log(list.push(7))
console.log('--------------')
console.log(list.pop())
console.log('--------------')
console.log(list.unshift(3))
console.log('--------------')
console.log(list.shift())
console.log('--------------')
console.log(list.get(0))
console.log('--------------')
console.log(list.set(1, 9))
console.log(list)
console.log('--------------')
console.log(list.insert(1, 8))
console.log(list)
console.log('--------------')
console.log(list.remove(1))
console.log(list)
console.log('--------------')
console.log(list.reverse())
console.log('--------------')
console.log(list.printList())
console.log('--------------')

// console.log(list.push('Hello'))
