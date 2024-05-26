// Selection Sort -finds min value items in the array and then swaps it, following which it is sorted
// Avoid this sort as much as possible

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minValueIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValueIdx]) {
        minValueIdx = j
      }
    }
    if (i !== minValueIdx) {
      let temp = arr[i]
      arr[i] = arr[minValueIdx]
      arr[minValueIdx] = temp
    }
  }
  return arr
}

console.log(selectionSort([8, 1, 2, 3, 4, 5, 6]))
