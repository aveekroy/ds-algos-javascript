// Write a function that takes a string, s, as an input and determines whether or not it is a palindrome.

// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// Constraints:
// 1 ≤ s.length ≤ 2 × 10^5
// The string s will not contain any white space and will only consist of ASCII characters(digits and letters).

// Time Complexity: O(n)
// Space Complexity: O(1)

function isPalindrome(s) {
  let left = 0,
    right = s.length - 1

  while (left < right) {
    if (s[left] != s[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

function main() {
  let testCases = [
      'RACECAR',
      'A',
      'ABCDEFGFEDCBA',
      'ABC',
      'ABCBA',
      'ABBA',
      'RACEACAR',
    ],
    i = 1

  testCases.map((s, index) => {
    console.log('Test Case #', i)
    console.log('-'.repeat(80))
    console.log(
      `The input string is '${s}' and the length of the string is ${s.length}.`
    )
    console.log('\nIs it a palindrome?.....', isPalindrome(s))
    console.log('-'.repeat(80))
    i++
  })
}

main()
