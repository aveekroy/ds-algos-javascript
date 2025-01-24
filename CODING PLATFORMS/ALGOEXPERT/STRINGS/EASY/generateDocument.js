// PROBLEM STATEMENT:

// You're given a string of available characters and a string representing a document that you need to generate. Write a function that determines if you
// can generate the document using the available characters. If you can generatecthe document, your function should return true ; otherwise, it
// should return false.

// You're only able to generate the document if the frequency of unique characters in the characters string is greater than or equal to the frequency
// of unique characters in the document string. For example, if you're given characters = "abcabc" and document = "aabbccc" you cannot
// generate the document because you're missing one c.

// The document that you need to create may contain any characters, including special characters, capital letters, numbers, and spaces.

// Note: you can always generate the empty string ("")

// INPUT:
// characters  = "Bste!hetsi ogEAxpelrt x "
// document = "AlgoExpert is the Best!"

// OUTPUT: true

function generateDocument(characters, document) {
  // Function to count character frequencies in a string
  function countFrequencies(str) {
    const frequencies = {}
    for (const char of str) {
      frequencies[char] = (frequencies[char] || 0) + 1
    }
    return frequencies
  }

  // Count the frequencies of each character in both strings
  const charCount = countFrequencies(characters)
  const docCount = countFrequencies(document)
  console.log(charCount)
  console.log(docCount)

  // Compare the character frequencies between document and characters
  for (const char in docCount) {
    if (docCount[char] > (charCount[char] || 0)) {
      return false
    }
  }
  return true
}

console.log(
  generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!')
)
