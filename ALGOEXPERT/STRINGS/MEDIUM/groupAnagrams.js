// Write a function that takes in an array of strings and groups anagrams together.

// Anagrams are strings made up of exactly the same letters, where order doesn't
// matter. For example,  cinema and iceman are anagrams

// Your function should return a list of anagram groups in no particular order in Javascript

// INPUT:
// const words = ["cinema", "iceman", "foo", "of", "act", "cat", "tac"];

// output:
// [
//     ["foo"],
//     ["flop", "olfp"],
//     ["oy", "yo"],
//     ["act", "cat", "tac"]
//   ]

function groupAnagrams(words) {
  const anagramGroups = {}

  for (const word of words) {
    // Sort the word to get the anagram key
    const sortedWord = word.split('').sort().join('')

    // If the key doesn't exist in the object, create it with an empty array
    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = []
    }

    // Add the word to the appropriate anagram group
    anagramGroups[sortedWord].push(word)
  }
  console.log(anagramGroups)

  // Convert the object values to an array of arrays
  return Object.values(anagramGroups)
}

const words = ['cinema', 'iceman', 'foo', 'of', 'act', 'cat', 'tac']
const groupedAnagrams = groupAnagrams(words)
console.log(groupedAnagrams)
