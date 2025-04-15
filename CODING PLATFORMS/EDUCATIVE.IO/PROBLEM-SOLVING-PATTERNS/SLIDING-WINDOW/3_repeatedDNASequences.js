// Given a string, s, that represents a DNA sequence,
// return all the 10-letter-long sequences (continuous substrings of exactly 10 characters) that appear more than once in s.
// You can return the output in any order.

// A DNA sequence consists of nucleotides represented by the letters ‘A’, ‘C’, ‘G’, and ‘T’ only.
// For example, “ACGAATTCCG” is a valid DNA sequence.
// Example 1:
// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

const findRepeatedDnaSequences = (s) => {
  const seen = new Set()
  const repeated = new Set()

  for (let i = 0; i <= s.length - 10; i++) {
    const sequence = s.slice(i, i + 10)
    if (seen.has(sequence)) {
      repeated.add(sequence)
    } else {
      seen.add(sequence)
    }
  }

  return Array.from(repeated)
}

// Example usage:
const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
console.log(findRepeatedDnaSequences(s)) // Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Explanation: The function uses a sliding window of size 10 to check for repeated sequences in the input string.
// It maintains two sets: one for seen sequences and another for repeated sequences.
// When a sequence is found in the seen set, it is added to the repeated set.
// Finally, the function returns the repeated sequences as an array.
// Time complexity: O(n), where n is the length of the input string s.
// Space complexity: O(n), where n is the number of unique sequences found.
// Note: The output order may vary since sets do not guarantee order.
// This implementation is efficient and handles the problem requirements effectively.
