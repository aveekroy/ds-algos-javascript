// Dutch National Flag algorithm

// Given an array, colors, which contains a combination of the following three elements:
// 0(representing red)
// 1(representing white)
// 2(representing blue)

// Sort the array in place so that the elements of the same color are adjacent,
// with the colors in the order of red, white, and blue.
// To improve your problem-solving skills, do not utilize the built-in sort function.

function sortColors(colors) {
  // Initialize the start, current, and end pointers
  let start = 0
  let current = 0
  let end = colors.length - 1

  // Iterate through the list until the current pointer exceeds the end pointer
  while (current <= end) {
    if (colors[current] === 0) {
      // If the current element is 0 (red), swap it with the element at the start pointer
      // This ensures the red element is placed at the beginning of the array
      ;[colors[start], colors[current]] = [colors[current], colors[start]]

      // Move both the start and current pointers one position forward
      current++
      start++
    } else if (colors[current] === 1) {
      // If the current element is 1 (white), just move the current pointer one position forward
      current++
    } else {
      // If the current element is 2 (blue), swap it with the element at the end pointer
      // This pushes the blue element to the end of the array
      ;[colors[current], colors[end]] = [colors[end], colors[current]]

      // Move the end pointer one position backward
      end--
    }
  }

  return colors
}

// Driver code
const inputs = [
  [0, 1, 0],
  [1, 1, 0, 2],
  [2, 1, 1, 0, 0],
  [2, 2, 2, 0, 1, 0],
  [2, 1, 1, 0, 1, 0, 2],
]

for (let i = 0; i < inputs.length; i++) {
  console.log(
    i + 1 + '.\tcolors:',
    inputs[i].toString(),
    '\n\n\tThe sorted array is:',
    sortColors(inputs[i])
  )

  console.log('-'.repeat(100))
}

// Time Complexity: O(n)
// Space Complexity: O(1)
// The algorithm runs in linear time, O(n), where n is the length of the input array.
