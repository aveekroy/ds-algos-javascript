// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// FREQUENCY COUNTER PATTERN - PROBLEM SOLVING

const areThereDuplicates = (...args) => {
  console.log(args) // it's an array
  const argsObj = {}
  for (let i of args) {
    argsObj[i] = (argsObj[i] || 0) + 1
  }
  console.log(argsObj)
  for (let val in argsObj) {
    if (argsObj[val] > 1) {
      return true
    }
  }
  return false
}

// areThereDuplicates(3, 4, 4, 6, 7)
console.log(areThereDuplicates('a', 'b', 'c', 'c', 'd'))
