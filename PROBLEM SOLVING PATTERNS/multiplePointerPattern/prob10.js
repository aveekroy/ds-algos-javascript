// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
// form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing.

function isSubsequence(str1, str2) {
  var match = 0
  if (!str1) return false
  for (let j = 0; j < str2.length; j++) {
    if (str2[j] === str1[match]) match++
    if (match === str1.length) return true
  }
  return false
}

console.log(isSubsequence('wor', 'cba world'))
