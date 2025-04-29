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
  // Template for printing the linked list with forward arrows
  printListWithForwardArrow() {
    let temp = this.head
    let result = ''
    while (temp != null) {
      result += temp.value
      temp = temp.next
      if (temp != null) result += ' → '
      // if this is the last node, print null at the end
      else result += ' → null'
    }
    return result
  }
  // Adding a node to the end of the LL
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
  // Removing a node from the end of the LL
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
    let current = this.head
    this.head = current.next
    current.next = null
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return current
  }
  // Accessing a node in a LL by its position
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
  // Changing the value of a node based on its position
  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = value
      return true
    }
    return false
  }
  // Adding a node to the LL at a specific position
  insert(index, value) {
    if (index < 0 || index >= this.length) return false
    if (index === this.length) return this.push(value)
    if (index === 0) return this.unshift(value)
    const newNode = new Node(value)
    const prev = this.get(index - 1)
    const temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }

  // Removing a node from the LL at a specific position
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
  // Reversing the LL
  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let after = temp.next
    let bfr = null
    while (temp !== null) {
      after = temp.next
      temp.next = bfr
      bfr = temp
      temp = after
    }
    return this
  }

  removeNthLastNode(n) {
    // Point two pointers, right and left, at head.
    let right = this.head
    let left = this.head

    // Move right pointer n elements away from the left pointer.
    for (let i = 0; i < n; i++) {
      right = right.next
    }

    // Removal of the head node.
    if (!right) {
      return this.head.next
    }

    // Move both pointers until right pointer reaches the last node.
    while (right.next != null) {
      right = right.next
      left = left.next
    }

    // At this point, left pointer points to (n-1)th element.
    // So link it to next to next element of left.
    left.next = left.next.next

    return this.head
  }
  middle() {
    let slow = this.head
    let fast = this.head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow.value
  }
  // makeCycleLL() {
  //   let node1 = this.get(1)
  //   let node2 = this.get(4)
  //   node2.next = node1
  // }
  cycleDetection() {
    let slow = this.head
    let fast = this.head
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) {
        return true
      }
    }
    return false
  }
  search(value) {
    let current = this.head
    while (current) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }
    return false
  }
  //remove duplicates
  removeDuplicates() {
    let current = this.head
    let prev = null
    let values = new Set()
    while (current) {
      if (values.has(current.value)) {
        prev.next = current.next
        this.length--
      } else {
        values.add(current.value)
        prev = current
      }
      current = current.next
    }
    return this
  }
}

let list = new LinkedList()
console.log(
  '------------------------------ PUSH: adding at the end of LL ------------------------------'
)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(9)
list.push(10)
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ POP: removing from the end of the LL ------------------------------'
)
list.pop()
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ UNSHIFT: adding at the beggining of LL ------------------------------'
)
list.unshift(3)
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ SHIFT: removing from the beginning of the LL ------------------'
)
list.shift()
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ GET: getting the node details from index provided ------------------'
)
console.log(list.get(2))
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ SET: setting the node value from index and vaue provided ------------------'
)
list.set(1, 12)
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ INSERT: inserting a node anywhere in the LL ------------------'
)
list.insert(3, 19)
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ REMOVE: removing a node from the LL by providing the index ------------------'
)
list.remove(1)
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ REVERSE: reversing the LL ------------------'
)
list.reverse()
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ MIDDLE: middle node of the LL ------------------'
)
console.log(list.middle())
// console.log('------------------------------ MAKE CYCLE ------------------')
// list.makeCycleLL()
// console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ CYCLE DETECTION: Detecting if any cycles present in the LL ------------------'
)
console.log(list.cycleDetection())
console.log(
  '------------------------------ REMOVE NTH LAST NODE: removing nth node from the end of the LL provided the index ------------------'
)
list.removeNthLastNode(3)
console.log(list.printListWithForwardArrow())
list.removeNthLastNode(2)
console.log(list.printListWithForwardArrow())
console.log(
  '------------------------------ SEARCH: searching a value in the LL------------------'
)
console.log(list.search(5))
console.log(list.search(100))
console.log(
  '------------------------------ REMOVE DUPLICATES: removing duplicates from the LL ------------------'
)
list.push(5)
list.push(6)
list.push(6)
list.push(7)
console.log(list.printListWithForwardArrow())
list.removeDuplicates()
console.log(list.printListWithForwardArrow())
