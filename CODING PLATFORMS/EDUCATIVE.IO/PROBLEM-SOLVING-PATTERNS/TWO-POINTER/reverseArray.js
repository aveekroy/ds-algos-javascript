// Reversing an array:
// Given an array of integers, reverse it in place.

const reverseArray = (arr) => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    // Swap the elements at the left and right pointers
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('Original:', arr)
reverseArray(arr)
console.log('Reversed:', arr)
// Time Complexity: O(n)
// Space Complexity: O(1)
