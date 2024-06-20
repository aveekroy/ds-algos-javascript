class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    let newNode = new Node(value)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
    return this
  }

  dequeue() {
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

let queue = new Queue()
console.log('--- ENQUEUE ---')
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log('--- DEQUEUE ---')
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
