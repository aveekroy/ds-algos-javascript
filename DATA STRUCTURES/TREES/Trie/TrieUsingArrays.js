class TrieNode {
    constructor(char) {
      this.children = [];
      for (let i = 0; i < 26; i++) { // Total # of English Alphabets
        this.children[i] = null;
      }
      this.isEndWord = false; // will be true if the node represents the end of word
      this.char = char; // To store the value of a particular key
    }
  
    // Function to mark the currentNode as Leaf
    markAsLeaf() {
      this.isEndWord = true;
    }
  
    // Function to unMark the currentNode as Leaf
    unMarkAsLeaf() {
      this.isEndWord = false;
    }
  };

// const TrieNode = require('./TrieNode');

class Trie {
  constructor() {
    this.root = new TrieNode(''); // Root node
  }

  // Function to get the index of character 't'
  getIndex(t) {
    return t.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  // Function to insert all the keys in the Trie
  insert(key) {
    // None keys are not allowed
    if (key == null) {
      return;
    }

    const keyToInsert = key.toLowerCase(); // Keys are stored in lowercase
    let currentNode = this.root;
    let index = 0; // To store the character index

    // Iterate the trie with the given character index,
    // If the index points to null
    // simply create a TrieNode and go down a level
    for (const element of keyToInsert) {
      index = this.getIndex(element);

      if (currentNode.children[index] == null) {
        currentNode.children[index] = new TrieNode(element);
        console.log(`${String(element)} inserted`);
      }
      currentNode = currentNode.children[index];
    }

    // Mark the end character as leaf node
    currentNode.markAsLeaf();
    console.log(`'${keyToInsert}' inserted`);
  }

  // Function to search a given key in Trie
  // Function to search a given key in Trie
  search(key) {
    if (key == null) {
      return false; // null key
    }

    const keyToSearch = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    // Iterate the Trie with given character index,
    // If it is null at any point then we stop and return false
    // We will return true only if we reach leafNode and have traversed the
    // Trie based on the length of the key

    for (const element of keyToSearch) {
      index = this.getIndex(element);
      if (currentNode.children[index] == null) {
        return false;
      }
      currentNode = currentNode.children[index];
    }
    if (currentNode != null && currentNode.isEndWord) {
      return true;
    }
    return false;
  }

  // Function to delete given key from Trie
  delete(key) {

  }
}

// Input keys (use only 'a' through 'z' and lower case)
const keys = ['the', 'a', 'there', 'answer', 'any',
  'by', 'bye', 'their', 'abc'];
const output = ['Not present in the trie', 'Present in the trie'];
const t = new Trie();
console.log('Keys to insert: ');
console.log(keys);

// Construct Trie
for (const key of keys) {
  t.insert(key);
}
console.log('-----------------------------------------------');
// Search for different keys
if (t.search('the') === true) console.log(`the --- ${output[1]}`);
else console.log(`the --- ${output[0]}`);

if (t.search('these') === true) console.log(`these --- ${output[1]}`);
else console.log(`these --- ${output[0]}`);

if (t.search('abc') === true) console.log(`abc --- ${output[1]}`);
else console.log(`abc --- ${output[0]}`);

  