// The input data needs to be sorted for a efficient Binary Search output

const binarySearch = (arr, searchItem) => {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2)

    // If element is present at mid, return True
    if (arr[mid] === searchItem) return mid
    // Else look in left or right half accordingly
    else if (arr[mid] < searchItem) start = mid + 1
    else end = mid - 1
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
) // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
) // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
)
