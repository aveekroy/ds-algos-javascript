// write a function called Sum zero, which accepts a sorted array of integers.So it needs to be sorted, not a sorted,
// but in order sorted from lowest to highest, the function should find the first pair where the sum is zero.

// MULTIPLE POINTERS PATTERN - PROBLEM SOLVING

// When to Use:
// - Problems involving searching for pairs of elements (e.g., two-sum problem).
// - Problems requiring linear time complexity.
// - Problems involving arrays or sequences.

// Tips:
// - Ensure that the array is sorted if required for the problem.

// - Always handle edge cases such as empty arrays or arrays with fewer elements.

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  const result = []
  // Check if the array is empty or has fewer than 2 elements
  if (arr.length < 2) {
    return result
  }
  // Iterate through the array using two pointers
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      result.push([arr[left], arr[right]])
      continue
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
  return result
}

console.log(sumZero([-3, -1, 0, 3, 2, 1, 4]))
