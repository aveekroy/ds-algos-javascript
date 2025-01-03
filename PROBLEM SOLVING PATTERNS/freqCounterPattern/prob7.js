// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// FREQUENCY COUNTER PATTERN - PROBLEM SOLVING

const sameFrequency = (num1, num2) => {
  const num1String = num1.toString()
  const num2String = num2.toString()
  const num1Obj = {}
  const num2Obj = {}
  for (let i of num1String) {
    num1Obj[i] = (num1Obj[i] || 0) + 1
  }
  for (let i of num2String) {
    num2Obj[i] = (num2Obj[i] || 0) + 1
  }
  console.log(num1Obj)
  console.log(num2Obj)
  for (let val in num1Obj) {
    if (num1Obj[val] !== num2Obj[val]) {
      return false
    }
  }
  return true
}

// sameFrequency(182, 281)
console.log(sameFrequency(22, 222))
