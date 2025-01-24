// PROBLEM STATEMENT:

// You're given a list of integers nums . Write a function that
// returns a boolean representing whether there exists a zero-sum subarray of nums

// A zero-sum subarray is any subarray where all of the values add up to zero.
// A subarray is any contiguous section of the array. For the purposes of this
// problem, a subarray can be as small as one element and as long as the
// original array.

// INPUT: nums  = [-5, -5, 2, 3, -2]

// OUTPUT: true

function zeroSumSubarray(nums) {
  const sums = new Set()
  let count = 0

  for (const num of nums) {
    sums.add(count)
    count += num
    if (sums.has(count)) return true
  }
  return false
}

console.log(zeroSumSubarray([-5, -5, 2, 3, -2]))
