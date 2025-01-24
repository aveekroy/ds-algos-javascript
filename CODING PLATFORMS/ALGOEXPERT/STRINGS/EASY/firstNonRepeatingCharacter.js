// PROBLEM STATEMENT:

// Write a function that takes in a string of lowercase English-alphabet letters
// and returns the index of the string's first non-repeating character.

// The first non-repeating character is the first character in a string that
// occurs only once.

// If the input string doesn't have any non-repeating characters, your function
// should return -1

// INPUT: string = "abbcdcaf"

// OUTPUT: 1

function firstNonRepeatingCharacter(string) {
  let charCount = {}
  for (let ch in string) {
    charCount[string[ch]] = (charCount[string[ch]] || 0) + 1
  }
  console.log(charCount)
  for (let ch of string) {
    if (charCount[ch] === 1) {
      return string.indexOf(ch)
    }
  }
  return -1
}

console.log(firstNonRepeatingCharacter('abbcdcaf'))
