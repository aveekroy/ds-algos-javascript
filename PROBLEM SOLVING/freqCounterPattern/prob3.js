// Anagram problem - So it has to do with anagrams writing function called anagram that takes two strings and it returns true
// if the strings are anagrams of one another - both the words have the same letters

// FREQUENCY COUNTER PATTERN - PROBLEM SOLVING

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let strData1 = {}
  let strData2 = {}

  for (let i of str1) {
    strData1[i] = (strData1[i] || 0) + 1
  }
  for (let i of str2) {
    strData2[i] = (strData2[i] || 0) + 1
  }
  console.log(strData1)
  console.log(strData2)
  for (let value in strData1) {
    if (strData1[value] !== strData2[value]) {
      return false
    }
  }
  return true
}

console.log(anagram('back', 'cabf'))
