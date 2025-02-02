// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  return (BigInt(digits.join('')) + BigInt(1))
    .toString()
    .split('')
    .map((i) => Number(i))
}

// Time complexity: O(n)
// Space complexity: O(n)

// Tests
console.log(plusOne([1, 2, 3])) // [1,2,4]
console.log(plusOne([4, 3, 2, 1])) // [4,3,2,2]
console.log(plusOne([0])) // [1]
console.log(plusOne([9])) // [1,0]
console.log(plusOne([9, 9])) // [1,0,0]
console.log(plusOne([9, 9, 9])) // [1,0,0,0]
console.log(plusOne([9, 9, 9, 9])) // [1,0,0,0,0]
console.log(plusOne([9, 9, 9, 9, 9])) // [1,0,0,0,0,0]
console.log(plusOne([9, 9, 9, 9, 9, 9])) // [1,0,0,0,0,0,0]
console.log(plusOne([9, 9, 9, 9, 9, 9, 9])) // [1,0,0,0,0,0,0,0]
