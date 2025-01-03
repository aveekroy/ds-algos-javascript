// STACK

// Approach:
// A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle,
// where elements are inserted and removed from the top of the stack.
// It’s commonly used for implementing algorithms involving recursion, backtracking, parsing, and expression evaluation.

// Steps to Implement:
// 1. Define the stack data structure with operations such as push, pop, peek, and isEmpty.
// 2. Use the stack to store elements and perform operations based on the LIFO principle.
// 3. Handle stack underflow and overflow conditions as needed.
// 4. Implement algorithms or operations that require a stack efficiently.

// When to Use:
// - Problems involving nested structures or recursive algorithms.
// - Implementing algorithms such as depth-first search, backtracking, or expression parsing.

// Tips:
// - Choose the appropriate data structure based on the problem requirements and constraints.
// - Implement stack-based algorithms efficiently using the stack data structure and appropriate operations.

// Use Case:
// Problem: Implement a stack-based algorithm to check if parentheses in a string are balanced.

function isBalancedParentheses(s) {
  const stack = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (let char of s) {
    if (char in map) {
      stack.push(char)
    } else {
      const top = stack.pop()
      if (map[top] !== char) {
        return false
      }
    }
  }
  return stack.length === 0
}

console.log(isBalancedParentheses('{[()]}'))
console.log(isBalancedParentheses('{[(])}'))
