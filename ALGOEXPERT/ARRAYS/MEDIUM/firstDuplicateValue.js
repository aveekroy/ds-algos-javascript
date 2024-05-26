// PROBLEM STATEMENT:

// Given an array of integers between 1 and n, inclusively, where n
// is the length of the array, write a function
// that returns the first integer that appears more than once (when the array is
// read from left to right).

// In other words, out of all the integers that might occur more than once in the
// input array, your function should return the one whose first duplicate value
// has the minimum index.

// If no integer appears more than once, your function should return -1

// Note that you're allowed to mutate the input array.

// INPUT: array  = [2, 1, 5, 2, 3, 3, 4]

// OUTPUT: 2

function firstDuplicateValue(array) {
  // Write your code here.
  let mapping = {}

  if (array.length === 0) return -1

  for (let i in array) {
    mapping[array[i]] = (mapping[array[i]] || 0) + 1
    if (mapping[array[i]] === 2) {
      return array[i]
    }
  }
  return -1
}

console.log(firstDuplicateValue([2, 1, 1, 3, 3, 5, 2, 3, 3, 4]))
