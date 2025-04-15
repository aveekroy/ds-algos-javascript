// Merge Sort - Splitting up, Merging and Sorting all in one
// Time - O(n log n)

function merge(arr1, arr2) {
  let results = []
  let arr1Idx = 0
  let arr2Idx = 0
  while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
    if (arr1[arr1Idx] <= arr2[arr2Idx]) {
      results.push(arr1[arr1Idx])
      arr1Idx++
    } else {
      results.push(arr2[arr2Idx])
      arr2Idx++
    }
  }
  while (arr1Idx < arr1.length) {
    results.push(arr1[arr1Idx])
    arr1Idx++
  }
  while (arr2Idx < arr2.length) {
    results.push(arr2[arr2Idx])
    arr2Idx++
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
