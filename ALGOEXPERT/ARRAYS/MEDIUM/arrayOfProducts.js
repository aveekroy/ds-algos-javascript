// PROBLEM STATEMENT:

// Write a function that takes in a non-empty array of integers and returns an
// array of the same length, where each element in the output array is equal to
// the product of every other number in the input array.

// In other words, the value at output[i]  is equal to the product of
// every number in the input array other than input[i]

// Note that you're expected to solve this problem without using division.

// INPUT: array  = [5, 1, 4, 2]

// OUTPUT: [8, 40, 10, 20]

function arrayOfProducts(nums) {
  const length = nums.length
  const leftProducts = new Array(length)
  const rightProducts = new Array(length)
  const output = new Array(length)

  // Initialize the first element of leftProducts to 1 since
  // there's no element to the left of the first element
  leftProducts[0] = 1
  for (let i = 1; i < length; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1]
  }

  // Initialize the last element of rightProducts to 1 since
  // there's no element to the right of the last element
  rightProducts[length - 1] = 1
  for (let i = length - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1]
  }

  // Construct the output array
  for (let i = 0; i < length; i++) {
    output[i] = leftProducts[i] * rightProducts[i]
  }

  return output
}

// Example usage:
const inputArray = [5, 1, 4, 2]
const result = arrayOfProducts(inputArray)
console.log(result) // Output: [24, 12, 8, 6]
