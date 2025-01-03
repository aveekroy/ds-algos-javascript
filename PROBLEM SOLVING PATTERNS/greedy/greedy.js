// Approach:
// Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum.
// They are used for optimization problems where making the locally optimal choice at each stage leads to the overall optimal solution.

// Steps to Implement:
// 1. Define the problem and identify the objective function to optimize.
// 2. Determine the criteria for making a greedy choice at each step.
// 3. Implement an algorithm to make the greedy choice at each step and update the solution accordingly.
// 4. Ensure that the greedy choice does not lead to an invalid or suboptimal solution.

// When to Use:
// - Problems where a greedy choice leads to an optimal solution.
// - Optimization problems that can be solved by making locally optimal choices.

// Tips:
// - Ensure that the greedy choice at each step is indeed optimal and leads to the overall optimal solution.
// - Greedy algorithms may not always produce the optimal solution for every problem, so verify the correctness of the solution.

// Use Case:
// Problem: Implement a greedy algorithm to find the minimum number of coins needed to make change for a given amount.

function coinChange(coins, amount) {
  coins.sort((a, b) => b - a)
  let coinCount = 0
  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      amount -= coins[i]
      coinCount++
    }
  }
  return amount === 0 ? coinCount : -1
}

// Example:
const coins = [1, 2, 5]
const amount = 13
console.log(coinChange(coins, amount)) // Output: 4
// Explanation: The minimum number of coins needed to make change for 13 is 4 (5 + 5 + 2 + 1).
