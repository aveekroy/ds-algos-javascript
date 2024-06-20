class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(value) {
    let newNode = new Node(value)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    this.size++
    return this
  }

  pop() {
    if (!this.first) return null
    let temp = this.first
    if (this.first === this.last) {
      this.last === null
    }
    this.first = this.first.next
    temp.next = null
    this.size--
    return this
  }
}

let stack = new Stack()
console.log('--- PUSH ---')
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.push(3))
console.log('--- POP ---')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
