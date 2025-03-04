// INSERTION SORT is used to sort an array by comparing each element with the previous elements and inserting it in the correct position.
// Time Complexity - O(n^2)
// Space Complexity - O(1)

function insertionSort(arr) {
  let i, key, j
  for (i = 1; i < arr.length; i++) {
    key = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j = j - 1
    }
    arr[j + 1] = key
  }
  return arr
}

console.log(insertionSort([12, 11, 13, 5, 6]))
