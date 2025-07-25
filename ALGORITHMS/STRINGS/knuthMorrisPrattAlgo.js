// Function to build the Longest Prefix Suffix (LPS) array
function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0)
  let len = 0
  let i = 1

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++
      lps[i] = len
      i++
    } else {
      if (len !== 0) {
        len = lps[len - 1] // fallback in the pattern
      } else {
        lps[i] = 0
        i++
      }
    }
  }
  return lps
}

// KMP Search Algorithm
function kmpSearch(text, pattern) {
  const lps = buildLPS(pattern)
  const matches = []

  let i = 0 // index for text
  let j = 0 // index for pattern

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++
      j++
    }

    if (j === pattern.length) {
      matches.push(i - j) // match found at this index
      j = lps[j - 1] // look for next match
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1] // fallback in pattern
      } else {
        i++ // move to next character in text
      }
    }
  }

  return matches
}

const text = 'abxabcabcaby abcaby bacabcaby'
const pattern = 'abcaby'

const result = kmpSearch(text, pattern)
console.log('Pattern found at index:', result) // Output: [6]
