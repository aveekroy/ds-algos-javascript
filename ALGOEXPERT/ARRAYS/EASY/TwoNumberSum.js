// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return
// an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the
// target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

// I/P -> array = [3, 5, -4, 8, 11, 1, -1, 6], targetSum = 10,
// O/P -> [-1, 11]

function twoNumberSum(array, targetSum) {
  const list = []
  for (let i = 0; i < array.length; i++) {
    let x = array[i]
    let y = targetSum - x
    if (list.includes(y)) {
      return [x, y]
    } else {
      list.push(x, y)
    }
  }
  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
