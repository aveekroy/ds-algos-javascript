// Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.
// It is similar to selection sort, where the largest (or smallest) element is selected and placed at the end (or beginning) of the array.
// The main steps of the heap sort algorithm are as follows:
// 1. Build a max heap from the input array.
// 2. Swap the first element (root) with the last element of the heap and reduce the heap size by 1.
// 3. Heapify the root element to maintain the max heap property.
// 4. Repeat steps 2 and 3 until the heap size is 1.
// 5. The array will now be sorted in ascending order.

// Implementation of the heap sort algorithm in JavaScript

// Function to perform heap sort
function heapSort(arr) {
  // Build max heap
  buildMaxHeap(arr)

  // Heapify the root element and repeat the process
  for (let i = arr.length - 1; i > 0; i--) {
    // Swap the root element with the last element
    swap(arr, 0, i)

    // Heapify the new root element
    heapify(arr, 0, i)
  }

  return arr
}

// Function to build a max heap
function buildMaxHeap(arr) {
  const n = arr.length
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, i, n)
  }
}

// Function to heapify a subtree
function heapify(arr, i, n) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i

  if (left < n && arr[left] > arr[max]) {
    max = left
  }

  if (right < n && arr[right] > arr[max]) {
    max = right
  }

  if (max !== i) {
    swap(arr, i, max)
    heapify(arr, max, n)
  }
}

// Function to swap two elements in an array
function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7]
console.log(heapSort(arr)) // Output: [5, 6, 7, 11, 12, 13]
// Time Complexity: O(n log n)
// Space Complexity: O(1)

// The heap sort algorithm is an efficient sorting algorithm with a time complexity of O(n log n).
// It is an in-place sorting algorithm, meaning it does not require any additional space other than the input array.
// Heap sort is not a stable sorting algorithm, as it does not preserve the relative order of equal elements.
// The main advantage of heap sort is its time complexity, which is optimal for comparison-based sorting algorithms.
// However, heap sort is not as commonly used as other sorting algorithms like quicksort or mergesort due to its complexity and lack of stability.
