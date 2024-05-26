// Write a function which takes in a string and returns counts of each character in the string.
// Avoid spaces, comma, uppercase etc.

const isAlphNumeric = (char) => {
  var code = char.charCodeAt()
  if (
    !(code > 47 && code < 58) && // numeric(0-9)
    !(code > 64 && code < 91) && // upper alpha(A-Z)
    !(code > 96 && code < 123) // lower alpha(a-z)
  ) {
    return false
  }
  return true
}
const charCount = (str) => {
  let result = {}
  for (let char of str) {
    if (isAlphNumeric(char)) {
      char = char.toLowerCase()
      result[char] > 0 ? result[char]++ : (result[char] = 1)
    }
  }
  console.log(result)
  return result
}

charCount(
  'fksdhfkjhkfhsdkf ,lhdskfgdhjsgfkghdskjfhksasasajdshfkgdskjfgdskjfgsFFjkdfgjkdsf (; %^%&%& jhdkjshsjgfjsdgfdsf'
)
