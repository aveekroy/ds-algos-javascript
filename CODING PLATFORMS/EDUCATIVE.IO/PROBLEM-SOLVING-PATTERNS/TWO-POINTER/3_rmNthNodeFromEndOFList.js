// Given the head of a singly linked list, remove the
// n-th node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

class LinkedList {
  constructor(values = []) {
    this.head = null
    if (values.length > 0) {
      this.createLinkedList(values)
    }
  }

  createLinkedList(values) {
    if (values.length === 0) {
      this.head = null
      return
    }

    this.head = new ListNode(values[0])
    let current = this.head
    for (let i = 1; i < values.length; i++) {
      current.next = new ListNode(values[i])
      current = current.next
    }
  }
}

function printListWithForwardArrow(linkedListNode) {
  let temp = linkedListNode
  let result = ''
  while (temp != null) {
    result += temp.val
    temp = temp.next
    if (temp != null) result += ' → '
    // if this is the last node, print null at the end
    else result += ' → null'
  }
  return result
}

function removeNthLastNode(head, n) {
  // Point two pointers, right and left, at head.
  let right = head
  let left = head

  // Move right pointer n elements away from the left pointer.
  for (let i = 0; i < n; i++) {
    right = right.next
  }

  // Removal of the head node.
  if (!right) {
    return head.next
  }

  // Move both pointers until right pointer reaches the last node.
  while (right.next != null) {
    right = right.next
    left = left.next
  }

  // At this point, left pointer points to (n-1)th element.
  // So link it to next to next element of left.
  left.next = left.next.next

  return head
}
// Driver Code
function main() {
  const inputs = [
    [23, 89, 10, 5, 67, 39, 70, 28],
    [34, 53, 6, 95, 38, 28, 17, 63, 16, 76],
    [288, 224, 275, 390, 4, 383, 330, 60, 193],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [69, 8, 49, 106, 116, 112, 104, 129, 39, 14, 27, 12],
  ]

  const n = [4, 1, 6, 9, 11]

  for (let i = 0; i < inputs.length; i++) {
    const inputLinkedList = new LinkedList()
    inputLinkedList.createLinkedList(inputs[i])
    console.log(
      i + 1 + '.\tLinked List:\t\t',
      printListWithForwardArrow(inputLinkedList.head)
    )
    console.log('\tn = ' + n[i])
    let result = removeNthLastNode(inputLinkedList.head, n[i])
    console.log('\tUpdated Linked List:\t', printListWithForwardArrow(result))
    console.log('-'.repeat(100))
  }
}

main()
