// PROBLEM STATEMENT:

// Write a function that takes in a list of unique strings and returns a list of
// semordnilap pairs.

// A semordnilap pair is defined as a set of different strings where the reverse
// of one word is the same as the forward version of the other. For example the
// words "diaper" and "repaid" are a semordnilap pair, as are the words
// "palindromes" and "semordnilap".

// The order of the returned pairs and the order of the strings within each pair
// does not matter.

// INPUT: words =  = ["diaper", "abc", "test", "cba", "repaid"]

// OUTPUT: [["diaper", "repaid"], ["abc", "cba"]]

function semordnilap(words) {
  const semordnilapGroups = {}
  for (const word of words) {
    const sortedWord = word.split('').sort().join('')
    if (!semordnilapGroups[sortedWord]) {
      semordnilapGroups[sortedWord] = []
    }
    semordnilapGroups[sortedWord].push(word)
  }
  return Object.values(semordnilapGroups).filter((item) => item.length > 1)
}

console.log(semordnilap(['diaper', 'abc', 'test', 'cba', 'repaid']))
