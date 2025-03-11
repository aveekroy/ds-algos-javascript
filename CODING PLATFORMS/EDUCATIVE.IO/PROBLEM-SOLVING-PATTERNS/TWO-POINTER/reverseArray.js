// Reversing an array: Given an array of integers, reverse it in place.

const reverseArray = (arr) => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
    left++
    right--
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr)
reverseArray(arr)
console.log(arr)
// Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Time Complexity: O(n)
// Space Complexity: O(1)
