// Fast and Slow Pointers
// Problem 1: Find the middle of a linked list

const findMiddleOfLinkedList = (head) => {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}
// Problem 2: Determine if a linked list has a cycle
const hasCycle = (head) => {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) return true
  }

  return false
}
// Problem 3: Find the starting node of a cycle in a linked list
const findCycleStart = (head) => {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }

  return null
}
// Problem 4: Find the length of a cycle in a linked list
const findCycleLength = (head) => {
  let slow = head
  let fast = head
  let cycleLength = 0

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      let current = slow
      do {
        current = current.next
        cycleLength++
      } while (current !== slow)
      return cycleLength
    }
  }

  return 0
}

// Example 1: Find the middle of a linked list
// Input: 1 -> 2 -> 3 -> 4 -> 5
// Output: 3
// Explanation: The middle node is 3.

const head1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
}
console.log(findMiddleOfLinkedList(head1)) // Output: 3

// Example 2: Determine if a linked list has a cycle
// Input: 1 -> 2 -> 3 -> 4 -> 5

// Output: false

const head2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
}

console.log(hasCycle(head2)) // Output: false
