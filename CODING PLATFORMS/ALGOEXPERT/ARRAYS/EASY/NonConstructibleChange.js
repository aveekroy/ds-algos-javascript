// PROBLEM STATEMENT:

// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you
// cannot  create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

// For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4 . If you're given no coins,
// the minimum amount of change that you can't create is 1

// INPUT:
// coins  = [5, 7, 1, 1, 2, 3, 22]

// OUTPUT:
// 20

function nonConstructibleChange(coins) {
  if (!coins.length) return 1
  coins.sort((a, b) => a - b)
  let minChange = 0
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > minChange + 1) break
    minChange += coins[i]
  }
  return minChange + 1
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
