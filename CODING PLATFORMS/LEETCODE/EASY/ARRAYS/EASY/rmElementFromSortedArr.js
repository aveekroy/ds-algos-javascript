// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  let j = nums.length - 1
  while (i <= j) {
    if (nums[i] === val) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      j--
    } else {
      i++
    }
  }
  return nums.slice(0, i)
}

// Time complexity: O(n)
// Space complexity: O(n)

// Tests
console.log(removeElement([3, 2, 2, 3], 3)) // [2, 2]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // [0, 1, 3, 0, 4]
