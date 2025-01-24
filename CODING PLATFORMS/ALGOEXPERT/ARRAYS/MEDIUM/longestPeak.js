// PROBLEM STATEMENT:

// Write a function that takes in an array of integers and returns the length of
// the longest peak in the array.

// A peak is defined as adjacent integers in the array that are strictly
// increasing until they reach a tip (the highest value in the peak), at which
// point they become strictly  decreasing. At least three integers are required to
// form a peak.

// INPUT: array  = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

// OUTPUT: 6

function longestPeak(array) {
  let longestPeakLength = 0
  let i = 1
  while (i < array.length - 1) {
    let isPeak = array[i - 1] < array[i] && array[i] > array[i + 1]
    if (!isPeak) {
      i++
      continue
    }
    let leftIdx = i - 2
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--
    }
    let rightIdx = i + 2
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++
    }
    let currPeakLength = rightIdx - leftIdx - 1
    longestPeakLength = Math.max(longestPeakLength, currPeakLength)
    i = rightIdx
  }
  return longestPeakLength
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
