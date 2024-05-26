// PROBLEM STATEMENT:

// Write a function that takes in two non-empty arrays of integers, finds the
// pair of numbers (one from each array) whose absolute difference is closest to
// zero, and returns an array containing these two numbers, with the number from
// the first array in the first position.

// Note that the absolute difference of two integers is the distance between
// them on the real number line. For example, the absolute difference of -5 and 5
// is 10, and the absolute difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with the smallest
// difference.

// INPUT:
// arrayOne = [-1, 5, 10, 20, 28, 3]
// arrayTwo = [26, 134, 135, 15, 17]

// OUTPUT: [28, 26]

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  let result = []
  let idx1 = 0
  let idx2 = 0
  let diff = Infinity

  while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
    let num1 = arrayOne[idx1]
    let num2 = arrayTwo[idx2]
    let currDiff = Math.abs(num1 - num2)
    if (currDiff < diff) {
      diff = currDiff
      result = [num1, num2]
    }
    if (num1 < num2) idx1++
    else if (num1 > num2) idx2++
    else break
  }
  return result
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))
