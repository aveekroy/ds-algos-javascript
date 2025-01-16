// Approach:
// Hashing involves mapping data of arbitrary size to fixed-size values (hash codes) using a hash function.
// It’s commonly used for indexing and retrieving data quickly in data structures such as hash tables, sets, and maps.

// Steps to Implement:
// 1. Choose or design a hash function appropriate for the data type and problem requirements.
// 2. Apply the hash function to generate hash codes for the data.
// 3. Use the hash codes to index and retrieve data efficiently from hash-based data structures.
// 4. Handle collisions, where multiple keys hash to the same index, using collision resolution techniques such as chaining or open addressing.

// When to Use:
// - Problems involving indexing, searching, or storing data efficiently.
// - Implementing data structures such as hash tables, sets, or maps.

// Tips:
// - Choose a hash function that produces a uniform distribution of hash codes to minimize collisions.
// - Implement collision resolution techniques based on the problem requirements and expected data characteristics.

// Use Case:
// Problem: Implement a hash-based data structure to store and retrieve key-value pairs efficiently.

class HashMap {
  constructor() {
    this.map = {}
  }

  put(key, value) {
    this.map[this._hash(key)] = value
  }

  get(key) {
    return this.map[this._hash(key)]
  }

  _hash(key) {
    let hash = 0
    for (let char of key) {
      hash = (hash + char.charCodeAt(0) * 13) % 101
    }
    return hash
  }
}

const map = new HashMap()
map.put('apple', 5)
map.put('banana', 10)
console.log(map.get('apple'))
console.log(map.get('banana'))
console.log(map.get('cherry'))
// Output:
// 5
// 10
// undefined
