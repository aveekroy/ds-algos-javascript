// Given a sentence, reverse the order of its words without affecting the order of letters within the given word.

// For example, given the sentence "I am a student.", return "student. a am I".

// MULTIPLE POINTERS PATTERN - PROBLEM SOLVING

function reverseWords(sentence) {
  // Trim spaces and split words using regex to handle multiple spaces
  let words = sentence.trim().split(/\s+/)

  // Reverse words using two pointers
  let left = 0,
    right = words.length - 1
  while (left < right) {
    ;[words[left], words[right]] = [words[right], words[left]]
    left++
    right--
  }

  // Join words with a single space
  return words.join(' ')
}

function main() {
  let testCases = [
      'Hello World',
      'a   string   with   multiple   spaces',
      'Case Sensitive Test 1234',
      'a 1 b 2 c 3 d 4 e 5',
      '     trailing spaces',
      'case test interesting an is this',
    ],
    i = 1

  testCases.map((s, index) => {
    console.log(`${i}.\t The input string is: '${s}'`)
    console.log(`\t The reversed string is: '${reverseWords(s)}'`)
    console.log('-'.repeat(100))
    i++
  })
}

main()
