// Bubble Sort - swaps consecutive items in the array following which it is sorted

const bubbleSort = (arr) => {
  let noSwaps // For optimization if the array is nearly sorted
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return arr
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6]))
