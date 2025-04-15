// Given a string s, return the minimum number of moves required to transform s into a palindrome.
// In each move, you can swap any two adjacent characters in s.

function minMovesToMakePalindrome(s) {
  // Counter to keep track of the total number of swaps
  let moves = 0

  // Loop to find a character from the right (s[j]) that
  // matches with a character from the left (s[i])
  for (let i = 0, j = s.length - 1; i < j; ++i) {
    let k = j
    for (; k > i; --k) {
      // If a matching character is found
      if (s[i] === s[k]) {
        // Move the matching character to the correct position on the right
        for (; k < j; ++k) {
          // Swap characters
          let temp = s[k]
          s = s.substring(0, k) + s[k + 1] + temp + s.substring(k + 2)
          // Increment count of swaps
          ++moves
        }
        // Move the right pointer inwards
        --j
        break
      }
    }
    // If no matching character is found, it must be moved to the center of palindrome
    if (k === i) {
      moves += Math.floor(s.length / 2) - i
    }
  }
  return moves
}

// Driver code
function main() {
  const strings = ['ccxx', 'arcacer', 'w', 'ooooooo', 'eggeekgbbeg']

  for (let i = 0; i < strings.length; ++i) {
    console.log(`${i + 1}.\ts: ${strings[i]}`)
    console.log(`\tMoves: ${minMovesToMakePalindrome(strings[i])}`)
    console.log('-'.repeat(100))
  }
}

main()
// Time Complexity: O(n^2)
// Space Complexity: O(1)
