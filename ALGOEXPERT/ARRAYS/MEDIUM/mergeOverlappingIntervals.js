// PROBLEM STATEMENT:

// Write a function that takes in a non-empty array of arbitrary intervals,
// merges any overlapping intervals, and returns the new intervals in no
// particular order.

// Each interval  is an array of two integers, with interval[0]
// as the start of the interval and interval[1]  as the end of the interval.

// Note that back-to-back intervals aren't considered to be overlapping. For
// example, [1,5] and [6,7]  aren't overlapping; however, [1,6] and [6,7] are
// indeed overlapping

// Also note that the start of any particular interval will always be less than
// or equal to the end of that interval.

// INPUT: intervals  = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]

// OUTPUT: [[1, 2], [3, 8], [9, 10]]

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0])
  console.log(array)

  let result = [array[0]]

  function merge(arr1, arr2) {
    return [arr1[0], Math.max(arr1[1], arr2[1])]
  }

  for (let i = 1; i < array.length; i++) {
    const last = result.length - 1
    if (result[last][1] >= array[i][0]) {
      result[last] = merge(result[last], array[i])
    } else {
      result.push(array[i])
    }
  }
  return result
}

console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
)
