// Bubble Sort - swaps consecutive items in the array following which it is sorted

// Time Complexity: O(n^2)
// Space Complexity: O(1)

const swap = (arr, i, j) => {
  return ([arr[i], arr[j]] = [arr[j], arr[i]])
}

const bubbleSort = (arr) => {
  let noSwaps // For optimization if the array is nearly sorted
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return arr
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6]))
console.log(bubbleSort([5, 1, 4, 2, 3, 6]))
console.log(
  bubbleSort([5, 1, 4, 2, 3, 6, 7, 2, 4, 6, 8, 9, 10, 11, 12, 10, 14, 15])
)
