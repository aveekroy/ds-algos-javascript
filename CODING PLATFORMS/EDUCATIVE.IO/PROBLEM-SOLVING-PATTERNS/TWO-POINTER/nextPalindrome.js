// Given a string num_str representing a palindrome, the string only contains digits. Your task is to return the next possible palindrome using the same digits.
// The returned palindrome would be the next largest palindrome, meaning there can be more than one way to rearrange the digits to make a larger palindrome.
// Return an empty string if no greater palindrome can be made.

function findNextPermutation(digits) {
  // Step 1: Find the first digit that is smaller than the digit after it
  let i = digits.length - 2
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--
  }
  if (i === -1) {
    return false
  }

  // Step 2: Find the next largest digit to swap with digits[i]
  let j = digits.length - 1
  while (digits[j] <= digits[i]) {
    j--
  }

  // Step 3: Swap the digits at i and j
  ;[digits[i], digits[j]] = [digits[j], digits[i]]

  // Step 4: Reverse the part of the array after index i
  let left = i + 1
  let right = digits.length - 1
  while (left < right) {
    ;[digits[left], digits[right]] = [digits[right], digits[left]]
    left++
    right--
  }
  return true
}

function findNextPalindrome(numStr) {
  let n = numStr.length

  if (n === 1) {
    return ''
  }

  let halfLength = Math.floor(n / 2)
  let leftHalf = numStr.slice(0, halfLength).split('')

  // Step 1: Get the next permutation for the left half
  if (!findNextPermutation(leftHalf)) {
    return ''
  }

  // Step 2: Form the next palindrome by mirroring the left half
  let nextPalindrome
  if (n % 2 === 0) {
    nextPalindrome = leftHalf.join('') + leftHalf.slice().reverse().join('')
  } else {
    let middleDigit = numStr[halfLength]
    nextPalindrome =
      leftHalf.join('') + middleDigit + leftHalf.slice().reverse().join('')
  }

  // Step 3: Ensure the result is larger than the original number
  if (nextPalindrome > numStr) {
    return nextPalindrome
  }
  return ''
}

function main() {
  const testCases = ['1221', '54345', '999', '12321', '89798']

  for (let i = 0; i < testCases.length; i++) {
    console.log(`${i + 1}.\t Original palindrome: '${testCases[i]}'`)
    const nextPalindrome = findNextPalindrome(testCases[i])
    console.log(`\t Next greater palindrome: '${nextPalindrome}'`)
    console.log('-'.repeat(100))
  }
}

main()
