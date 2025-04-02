// We are given an array of closed intervals, intervals, where each interval has a start time and an end time.
// The input array is sorted with respect to the start times of each interval.
// For example, intervals = [[1,4],[3,6],[7,9]] is sorted in terms of start times (1, 3, 7).
// Your task is to merge the overlapping intervals and return a new output array consisting of only the non-overlapping intervals.

// For example, given the input intervals = [[1,4],[2,5],[6,8],[7,9]], the output should be [[1,5],[6,9]].
// The first two intervals [1,4] and [2,5] overlap, so they are merged into [1,5].
// The last two intervals [6,8] and [7,9] also overlap, so they are merged into [6,9].
// The merged intervals are then returned as the output array.
// The output array should also be sorted in terms of the start times of each interval.
// Note that the output array should not contain any overlapping intervals.

// The time complexity of this solution is O(n), where n is the number of intervals in the input array.

function mergeIntervals(intervals) {
  if (intervals.length === 0) return []

  // Sort the intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0])

  const merged = []
  let currentInterval = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const nextInterval = intervals[i]

    // If the current interval overlaps with the next interval, merge them
    if (currentInterval[1] >= nextInterval[0]) {
      currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
    } else {
      // If they do not overlap, push the current interval to the merged array
      merged.push(currentInterval)
      currentInterval = nextInterval
    }
  }

  // Push the last interval
  merged.push(currentInterval)

  return merged
}
// Example usage:
const intervals = [
  [1, 4],
  [2, 5],
  [6, 8],
  [7, 9],
]
console.log(mergeIntervals(intervals)) // Output: [[1, 5], [6, 9]]
// Example usage with no overlapping intervals
const intervals2 = [
  [1, 2],
  [3, 4],
  [5, 6],
]
console.log(mergeIntervals(intervals2)) // Output: [[1, 2], [3, 4], [5, 6]]
// Example usage with all intervals overlapping
const intervals3 = [
  [1, 5],
  [2, 6],
  [3, 7],
]
console.log(mergeIntervals(intervals3)) // Output: [[1, 7]]
// Example usage with empty input
const intervals4 = []
console.log(mergeIntervals(intervals4)) // Output: []
// Example usage with single interval
const intervals5 = [[1, 3]]
console.log(mergeIntervals(intervals5)) // Output: [[1, 3]]
