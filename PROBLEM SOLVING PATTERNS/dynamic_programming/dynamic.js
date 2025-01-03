// Approach:
// Dynamic programming breaks down a problem into simpler subproblems and solves each subproblem only once, storing the results to avoid redundant calculations.
// It’s particularly useful for optimization problems where the solution can be built from solutions to smaller subproblems.

// Steps to Implement:
// 1. Identify the base cases or smallest subproblems.
// 2. Define a memoization table or array to store the results of subproblems.
// 3. Solve the larger problems by combining solutions to smaller subproblems.
// 4. Implement a recursive or iterative approach to fill in the memoization table and calculate the final solution.

// When to Use:
// - Problems involving overlapping subproblems, where the same subproblems are repeatedly encountered.
// - Optimization problems where the solution can be constructed from solutions to smaller subproblems.

// Tips:
// - Start by solving the problem recursively and then optimize using memoization.
// - Carefully define the states and transitions in the dynamic programming approach to avoid errors.

// Use Case:
// Problem: Find the nth Fibonacci number using dynamic programming.

function fibonacci(n, memo = {}) {
  if (n <= 2) return 1
  if (memo[n]) return memo[n]

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
  return memo[n]
}

console.log(fibonacci(6)) // 8
console.log(fibonacci(7)) // 13
console.log(fibonacci(8)) // 21
console.log(fibonacci(50)) // 12586269025
console.log(fibonacci(100)) // 354224848179262000000
