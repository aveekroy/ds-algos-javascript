// PROBLEM STATEMENT:
// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

// INPUT:
// array = [1, 2, 3, 5, 6, 8, 9]

// OUTPUT:
// [1, 4, 9, 25, 36, 64, 81]

function numCompare(a, b) {
  return Math.abs(a) - Math.abs(b)
}

function sortedSquaredArray(arr) {
  arr.sort(numCompare)
  result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2)
  }
  return result
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))
