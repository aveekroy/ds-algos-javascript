// QUICK SORT

function pivot(arr, start = 0, end = arr.length) {
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  let pivot = arr[start]
  let swapIdx = start
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
  console.log(arr)
  return swapIdx
}

// console.log(pivot([3, 4, 5, 2, 1]))

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right)
    quickSort(arr, left, pivotIdx - 1)
    quickSort(arr, pivotIdx + 1, right)
  }
  return arr
}

console.log(quickSort([3, 4, 5, 2, 1]))
