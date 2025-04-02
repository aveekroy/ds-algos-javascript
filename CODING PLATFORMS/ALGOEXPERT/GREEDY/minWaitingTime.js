// You're given a non-empty array of positive integers representing the amounts
// of time that specific queries take to execute. Only one query can be executed
// at a time, but the queries can be executed in any order.
//   A query's waiting time  is defined as the amount of time that it must
//   wait before its execution starts. In other words, if a query is executed
//   second, then its waiting time is the duration of the first query; if a query
//   is executed third, then its waiting time is the sum of the durations of the
//   first two queries.

// Write a function that returns the minimum amount of total waiting time for all
// of the queries. For example, if you're given the queries of durations
//   [1, 4, 5], then the total waiting time for all of the queries is
//   (0) + (1) + (1 + 4) = 6.
//   Note that the total waiting time for a query is zero if it is executed first.

function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b)
  let minWaitingTime = 0
  if (queries.length === 1) return 0
  for (let i = 0; i < queries.length; i++) {
    let itemsLeft = queries.length - 1 - i
    minWaitingTime += queries[i] * itemsLeft
  }
  return minWaitingTime
}

// Time Complexity: O(n log n)
// Space Complexity: O(1)

// Example usage:
const queries = [3, 2, 1, 2, 6]
console.log(minimumWaitingTime(queries)) // Output: 17
const queries2 = [1, 4, 5]
console.log(minimumWaitingTime(queries2)) // Output: 6
const queries3 = [2]
console.log(minimumWaitingTime(queries3)) // Output: 0
