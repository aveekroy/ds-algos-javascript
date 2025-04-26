class Node {
  constructor() {
    this.children = {}
    this.isWord = false
  }
}

class Trie {
  // Constructor to create a trie node.
  constructor() {
    this.root = new Node()
  }
  // A function to insert a word in trie.
  insert(word) {
    let node = this.root
    // Iterate over the word character by character.
    for (let cIdx = 0; cIdx < word.length; cIdx++) {
      let c = word[cIdx]
      // If child node is not present, create a new node
      // and add to trie.
      if (!node.children[c]) {
        node.children[c] = new Node()
      }
      node = node.children[c]
    }
    // Once the a complete word is added to the trie,
    // set boolean variable to true.
    node.isWord = true
  }

  // A function to search for a word in the trie.
  search(word) {
    let node = this.root

    // Iterate over the word character by character.
    for (let i = 0; i < word.length; i++) {
      let c = word[i]
      // If there is no any child of a node,
      // return false as we do not find the word.
      if (!node.children[c]) {
        return false
      }
      node = node.children[c]
    }
    // Return the word after traversing all nodes as it is found.
    return node.isWord
  }

  // A function to search for a prefix of a word in the trie.
  searchPrefix(prefix) {
    let node = this.root
    // Iterate over the prefix character by character.
    for (let i = 0; i < prefix.length; i++) {
      let c = prefix[i]
      // If there is no any child of a node,
      // return false as we do not find the prefix.
      if (!node.children[c]) {
        return false
      }
      node = node.children[c]
    }
    // Return true after traversing all nodes as the prefix is found.
    return true
  }
}

// Driver code
function main() {
  let keys = ['the', 'a', 'there', 'answer', 'any', 'by', 'bye', 'their'],
    trieForKeys = new Trie(),
    num = 1

  keys.forEach((x) => {
    console.log(num + ".\tInserting key: '" + x + "'")
    trieForKeys.insert(x)
    num++
    console.log('-'.repeat(100))
  })

  let search = ['a', 'answer', 'xyz', 'an']
  search.forEach((y) => {
    console.log(num + ".\tSearching key: '" + y + "'")
    console.log('\tKey found?', trieForKeys.search(y))
    num += 1
    console.log('-'.repeat(100))
  })

  let searchPrefix = ['b', 'an']
  searchPrefix.forEach((y) => {
    console.log(num + ".\tSearching prefix: '" + y + "'")
    console.log('\tPrefix found?', trieForKeys.searchPrefix(y))
    num += 1
    console.log('-'.repeat(100))
  })
  console.log('Trie implementation completed.')
}

main()
