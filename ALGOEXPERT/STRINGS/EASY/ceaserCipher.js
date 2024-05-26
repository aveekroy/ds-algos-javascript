// PROBLEM STATEMENT:

// Given a non-empty string of lowercase letters and a non-negative integer
// representing a key, write a function that returns a new string obtained by
// shifting every letter in the input string by k positions in the alphabet,
// where k is the key.

// Note that letters should "wrap" around the alphabet; in other words, the z
// shifted by one returns the letter a.

// INPUT:
// string = 'xyz' , key=2

// OUTPUT: 'zab'

function caesarCipherEncryptor(string, key) {
  let StrArr = []
  for (let i in string) {
    let charCode = (string[i].charCodeAt() - 97 + key) % 26
    StrArr.push(String.fromCharCode(charCode + 97))
  }
  return StrArr.join('')
}

console.log(caesarCipherEncryptor('avk', 19))
