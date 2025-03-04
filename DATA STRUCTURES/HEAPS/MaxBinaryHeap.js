// MaxBinaryHeap (Parent nodes are always larger or equal to than the child nodes)

class MaxBinaryHeap {
  //The constructor will initialize an array that will contain the values of the heap.
  // It will also store the number of elements currently present in the heap.
  constructor() {
    this.heap = []
    this.elements = 0
  }
  // This function appends the given value to the heap array and calls the __percolateUp() function on it.
  // This function will swap the values at parent-child nodes until the heap property is restored.
  insert(val) {
    if (this.elements >= this.heap.length) {
      this.elements = this.elements + 1
      this.heap.push(val)
      this.__percolateUp(this.heap.length - 1)
    } else {
      this.heap[this.elements] = val
      this.elements = this.elements + 1
      this.__percolateUp(this.elements - 1)
    }
  }
  //This function returns the maximum value in the heap which is the root, i.e., the first value in the array.
  // It does not modify the heap itself.
  getMax() {
    if (this.elements != 0) return this.heap[0]
    return null
  }
  // This function removes and returns the maximum value in the heap.
  removeMax() {
    if (this.elements > 1) {
      let max = this.heap[0]
      this.heap[0] = this.heap[this.elements - 1]
      this.elements = this.elements - 1
      this.__maxHeapify(0)
      return max
    } else if (this.elements == 1) {
      let max = this.heap[0]
      this.elements = this.elements - 1
      return max
    } else {
      return null
    }
  }

  // The __percolateUp() function is meant to restore the heap property going up from a node to the root.
  // __ means that this is a private function.
  __percolateUp(index) {
    let parent = Math.floor((index - 1) / 2)
    if (index <= 0) return
    else if (this.heap[parent] < this.heap[index]) {
      let tmp = this.heap[parent]
      this.heap[parent] = this.heap[index]
      this.heap[index] = tmp
      this.__percolateUp(parent)
    }
  }
  // The __maxHeapify() function restores the heap property starting from a given node down to the leaves.
  // __ means that this is a private function.
  __maxHeapify(index) {
    let left = index * 2 + 1
    let right = index * 2 + 2
    let largest = index
    if (this.elements > left && this.heap[largest] < this.heap[left]) {
      largest = left
    }
    if (this.elements > right && this.heap[largest] < this.heap[right])
      largest = right
    if (largest != index) {
      let tmp = this.heap[largest]
      this.heap[largest] = this.heap[index]
      this.heap[index] = tmp
      this.__maxHeapify(largest)
    }
  }
  // Let’s build a max-heap now. Suppose we have n elements in an array which represents our heap.
  // For every node to be positioned in accordance with the max-heap property, we call the _maxHeapify method at every index of that array, starting from the bottom of the heap
  buildHeap(arr) {
    this.heap = arr
    this.elements = this.heap.length
    for (let i = this.heap.length - 1; i >= 0; i--) {
      this.__maxHeapify(i)
    }
  }
}
let heap = new MaxBinaryHeap()
let arr = [6, 9, 3, 4, 10]
heap.buildHeap(arr)
console.log(heap.getMax())
console.log(arr)

heap.removeMax()
console.log(heap.getMax())
console.log(arr)

heap.insert(12)
console.log(heap.getMax())
console.log(arr)
