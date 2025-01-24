// Solving Fibonacci using Dynamic programming (technique called memoization) which is way faster than recursion without memoization

const fibonacci_memoization = (num, memo = []) => {
  if (memo[num] !== undefined) return memo[num]
  if (num <= 2) return 1
  let result =
    fibonacci_memoization(num - 1, memo) + fibonacci_memoization(num - 2, memo)
  memo[num] = result
  return result
}

console.log(fibonacci_memoization(100))

// Solving Fibonacci using Dynamic programming (technique called tabulation) which is way faster than recursion without tabulation
const fibonacci_tabulation = (num) => {
  if (num <= 2) return 1
  let fibNums = [0, 1, 1]
  for (let i = 3; i <= num; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }
  return fibNums[num]
}
console.log(fibonacci_tabulation(100))
