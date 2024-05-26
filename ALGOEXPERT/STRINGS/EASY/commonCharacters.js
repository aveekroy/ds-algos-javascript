// PROBLEM STATEMENT:

// Write a function that takes in a non-empty list of non-empty strings and
// returns a list of characters that are common to all strings in the list,
// ignoring multiplicity.

// Note that the strings are not guaranteed to only contain alphanumeric characters. The list
// you return can be in any order.

// INPUT: strings  = ["abc", "bcd", "cbaccd"]

// OUTPUT: ["b", "c"]

// USAGE OF SET

function commonCharacters(strings) {
  const stringSet = new Set(strings[0]) // abc
  for (let i = 1; i < strings.length; i++) {
    const compareSet = new Set(strings[i]) //bcd, cbad
    for (let key of stringSet) {
      if (!compareSet.has(key)) stringSet.delete(key)
    }
  }
  return Array.from(stringSet)
}

console.log(commonCharacters(['abcd', 'bcd', 'cbaccd']))
