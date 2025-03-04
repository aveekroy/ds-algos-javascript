// Given an integer array nums, find and return all unique triplets [nums[i], nums[j], nums[k]],
// where the indexes satisfy i != j, i != k, j != k and the sum of the elements nums[i] + nums[j] + nums[k] == 0.

function threeSum(nums) {
  // Sort the array
  nums.sort((a, b) => a - b)
  const result = []
  const n = nums.length

  // Iterate through the array
  for (let pivot = 0; pivot < n - 2; pivot++) {
    // If the current number is greater than 0, break the loop (no valid triplets possible)
    if (nums[pivot] > 0) {
      break
    }
    // Skip duplicate values for the pivot
    if (pivot > 0 && nums[pivot] === nums[pivot - 1]) {
      continue
    }

    // Use two-pointer technique
    let low = pivot + 1,
      high = n - 1
    while (low < high) {
      const total = nums[pivot] + nums[low] + nums[high]
      if (total < 0) {
        low++
      } else if (total > 0) {
        high--
      } else {
        // Found a triplet
        result.push([nums[pivot], nums[low], nums[high]])
        low++
        high--
        // Skip duplicates for low and high pointers
        while (low < high && nums[low] === nums[low - 1]) {
          low++
        }
        while (low < high && nums[high] === nums[high + 1]) {
          high--
        }
      }
    }
  }

  return result
}

// Driver code
function main() {
  const testCases = [
    // Test Case 1: Basic case
    [-1, 0, 1, 2, -1, -4],
    // Test Case 2: No valid triplets
    [1, 2, 3, 4, 5],
    // Test Case 3: All zeros
    [0, 0, 0, 0],
    // Test Case 4: Mixed numbers with duplicates
    [-4, -1, -1, 0, 1, 2, 2],
    // Test Case 5: Large negative and positive range
    [-10, -7, -3, -1, 0, 3, 7, 10],
    // Test Case 6: All negative
    [-3, -5, -7, -9],
  ]

  testCases.forEach((nums, idx) => {
    console.log(`\nTest Case ${idx + 1}:\n\tInput: [${nums.join(', ')}]`)
    const result = threeSum(nums)
    console.log(
      `\tOutput: [${result
        .map((triplet) => `[${triplet.join(', ')}]`)
        .join(', ')}]`
    )
    console.log('-'.repeat(100))
  })
}

main()
