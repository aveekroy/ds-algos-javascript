// write a function called Sum zero, which accepts a sorted array of integers.So it needs to be sorted, not a sorted,
// but in order sorted from lowest to highest, the function should find the first pair where the sum is zero.

// MULTIPLE POINTERS PATTERN - PROBLEM SOLVING

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

console.log(sumZero([-3, -1, 0, 3, 2, 1, 4]))
