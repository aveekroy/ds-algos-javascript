// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return array with the first k elements of nums containing the unique elements in the order they were present in nums initially.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const uniq = {}
  let expectedNums = []
  for (let i of nums) {
    uniq[i] = (uniq[i] || 0) + 1
  }
  for (let i in uniq) {
    if (uniq[i] > 0) {
      expectedNums.push(parseInt(i))
    }
  }
  return expectedNums
}

// Time complexity: O(n)
// Space complexity: O(n)

// Tests
console.log(removeDuplicates([1, 1, 2])) // [1, 2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) // [0, 1, 2, 3, 4]
