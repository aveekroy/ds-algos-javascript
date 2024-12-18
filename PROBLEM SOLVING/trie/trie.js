// Approach:
// A trie is a tree-like data structure used to store a dynamic set of strings.
// It’s efficient for searching and inserting strings, especially when there is a large set of strings with a common prefix.

// Steps to Implement:
// 1. Define a trie node structure with pointers to child nodes and a flag to indicate the end of a word.
// 2. Implement insertion operation to add words to the trie by creating nodes as needed.
// 3. Implement search operation to check if a word exists in the trie.
// 4. Implement prefix search operation to find all words with a given prefix.

// When to Use:
// - Problems involving searching or inserting strings efficiently.
// - Implementing auto-complete, spell checker, or dictionary applications.

// Tips:
// - Trie is efficient for storing and searching for strings with a common prefix.
// - Optimize trie operations by using appropriate data structures and algorithms for string manipulation.

// Use Case:
// Problem: Implement a trie to store a set of words and search for a specific word.

class TrieNode {
  constructor() {
    this.children = {}
    this.isEndOfWord = false
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode()
      }
      node = node.children[char]
    }
    node.isEndOfWord = true
  }

  search(word) {
    let node = this.root
    for (let char of word) {
      if (!node.children[char]) {
        return false
      }
      node = node.children[char]
    }
    return node.isEndOfWord
  }
}

const trie = new Trie()
trie.insert('apple')
console.log(trie.search('apple'))
console.log(trie.search('app'))
