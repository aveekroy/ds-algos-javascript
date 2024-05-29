// PROBLEM STATEMENT:

// Write a function that takes in a non-empty, unordered array  of
// positive integers and returns the array's majority element without sorting
// the array and without using more than constant space.

// An array's majority element is an element of the array that appears in over
// half of its indices. Note that the most common element of an array (the
// element that appears the most times in the array) isn't necessarily the
// array's majority element; for example, the arrays [3,2,2,1] and [3,4,2,2,1]
// both have 2  as their most common element, yet neither of these arrays
// have a majority element, because neither 2  nor any other
// element appears in over half of the respective arrays' indices.

// You can assume that the input array will always have a majority element.

// INPUT: array =  = [1, 2, 3, 2, 2, 1, 2]

// OUTPUT: 2

function majorityElement(array) {
  let count = {}
  for (let i in array) {
    count[array[i]] = (count[array[i]] || 0) + 1
  }
  for (let j in count) {
    if (count[j] > array.length / 2) {
      return j
    }
  }
}

console.log(
  majorityElement([435, 6543, 6543, 435, 535, 6543, 6543, 12, 43, 6543, 6543])
)
