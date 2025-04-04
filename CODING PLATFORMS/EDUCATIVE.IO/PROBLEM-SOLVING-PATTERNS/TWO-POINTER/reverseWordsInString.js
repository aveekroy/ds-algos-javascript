// Given a sentence, reverse the order of its words without affecting the order of letters within the given word.

// For example, given the sentence "I am a student.", return "student. a am I".

// MULTIPLE POINTERS PATTERN - PROBLEM SOLVING

const reverseWordsInString = (str) => {
  // Check if the string is empty or has fewer than 2 characters
  if (str.length < 2) {
    return str
  }

  // Split the string into words
  const words = str.split(' ')
  // Initialize two pointers
  let left = 0
  let right = words.length - 1

  // Reverse the order of words using two pointers
  while (left < right) {
    // Swap the words at left and right pointers
    ;[words[left], words[right]] = [words[right], words[left]]
    // Move the pointers towards each other
    left++
    right--
  }

  // Join the reversed words back into a string
  return words.join(' ')
}
// Example usage:
const sentence = 'I am a student. My name is Aveek Roy.'
console.log(reverseWordsInString(sentence)) // Output: "student. a am I"
// Time Complexity: O(n), where n is the length of the input string
// Space Complexity: O(n), as we are using extra space to store the words
