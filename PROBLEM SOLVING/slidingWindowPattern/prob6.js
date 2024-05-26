// write a function called max sub array, some which accepts an array of integers and a number called n so it doesn't have to be sorted the array.
// This is just any integers in an array and then we pass in a second number as I already mentioned.
// And your function should calculate the maximum sum of n consecutive elements in that array.

// SLIDING WINDOW PATTERN - PROBLEM SOLVING

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0
  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i] // main logic
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}
console.log(maxSubarraySum([2, 4, 6, 7, 5, 1, 2, 3], 3))
console.log(maxSubarraySum([100, 200, 300, 400], 3))
