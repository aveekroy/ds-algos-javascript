// PROBLEM STATEMENT:

// You're given an unordered list of unique integers nums in the range [1,n] where n
// represents the length of nums+2. . This means that two numbers in this range are missing
// from the list.

// Write a function that takes in this list and returns a new list with the two
// missing numbers, sorted numerically.

// INPUT: nums = [1,4,3]

// OUTPUT: [2,5]

function missingNumbers(nums) {
  let desiredLength = nums.length + 2
  let numberSet = new Set(nums)
  let result = []
  for (let i = 1; i <= desiredLength; i++) {
    if (!numberSet.has(i)) {
      result.push(i)
    }
  }
  return result
}

console.log(missingNumbers([1, 4, 3]))
