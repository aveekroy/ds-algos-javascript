var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArray = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i])
      i++
    } else if (nums1[i] > nums2[j]) {
      mergedArray.push(nums2[j])
      j++
    } else {
      mergedArray.push(nums1[i])
      mergedArray.push(nums2[j])
      i++
      j++
    }
  }
  while (i < nums1.length) {
    mergedArray.push(nums1[i])
    i++
  }
  while (j < nums2.length) {
    mergedArray.push(nums2[j])
    j++
  }
  console.log(mergedArray)
  let median = null
  let idx = Math.floor(mergedArray.length / 2)
  if (mergedArray.length % 2 === 0) {
    median = (mergedArray[idx] + mergedArray[idx - 1]) / 2
  } else {
    median = mergedArray[idx]
  }
  return median
}

console.log(
  findMedianSortedArrays(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4],
    [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]
  )
)
