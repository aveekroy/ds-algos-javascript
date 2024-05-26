// Merge Sort - Splitting up, Merging and Sorting all in one
// Time - O(n log n)

function merge(arr1, arr2) {
  let results = []
  let arrIdx1 = 0
  let arrIdx2 = 0
  while (arrIdx1 < arr1.length && arrIdx2 < arr2.length) {
    if (arr1[arrIdx1] <= arr2[arrIdx2]) {
      results.push(arr1[arrIdx1])
      arrIdx1++
    } else {
      results.push(arr2[arrIdx2])
      arrIdx2++
    }
  }
  while (arrIdx1 < arr1.length) {
    results.push(arr1[arrIdx1])
    arrIdx1++
  }
  while (arrIdx2 < arr2.length) {
    results.push(arr2[arrIdx2])
    arrIdx2++
  }
  return results
}

// console.log(merge([], [2, 14, 99, 100])) // Both the arrays needs to be sorted

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

// To create an array with 100000 elements
var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)

console.log(mergeSort(data))
