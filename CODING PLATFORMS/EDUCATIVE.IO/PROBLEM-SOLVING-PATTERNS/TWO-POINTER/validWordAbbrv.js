//Given a string word and an abbreviation abbr, return TRUE if the abbreviation matches the given string. Otherwise, return FALSE.

const validWordAbbreviation = (word, abbr) => {
  let wordIndex = 0,
    abbrIndex = 0

  while (abbrIndex < abbr.length) {
    // Check if the current character is a digit.
    if (!isNaN(abbr[abbrIndex])) {
      // Check if there's a leading zero. If there is, return False.
      if (abbr[abbrIndex] === '0') {
        return false
      }
      let num = 0

      while (abbrIndex < abbr.length && !isNaN(abbr[abbrIndex])) {
        num = num * 10 + parseInt(abbr[abbrIndex])
        abbrIndex++
      }
      // Skip the number of characters in word as found in abbreviation.
      wordIndex += num
    } else {
      // Check if characters the match, then increment the pointers. Otherwise return False.
      if (wordIndex >= word.length || word[wordIndex] !== abbr[abbrIndex]) {
        return false
      }
      wordIndex++
      abbrIndex++
    }
  }

  // Check if both indices have reached the end of their respective strings.
  return wordIndex === word.length && abbrIndex === abbr.length
}

const words = [
  'a',
  'a',
  'abcdefghijklmnopqrst',
  'abcdefghijklmnopqrst',
  'word',
  'internationalization',
  'localization',
]
const abbreviations = ['a', 'b', 'a18t', 'a19t', 'w0rd', 'i18n', 'l12n']

for (let i = 0; i < words.length; i++) {
  console.log(`${i + 1}.\t word: '${words[i]}'`)
  console.log(`\t abbr: '${abbreviations[i]}'`)
  console.log(
    `\n\t Is '${abbreviations[i]}' a valid abbreviation for the word '${
      words[i]
    }'? ${validWordAbbreviation(words[i], abbreviations[i]) ? 'Yes' : 'No'}`
  )
  console.log('-'.repeat(80))
}
