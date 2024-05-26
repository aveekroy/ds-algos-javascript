// PROBLEM STATEMENT:

// Write a function that takes in a non-empty string and that returns a boolean
// representing whether the string is a palindrome.

// INPUT:

// string = 'mom'

// OUTPUT: true

function isPalindrome(string) {
  let result = ''
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i]
  }

  if (result === string) {
    return true
  }
  return false
}

console.log(isPalindrome('mom'))
