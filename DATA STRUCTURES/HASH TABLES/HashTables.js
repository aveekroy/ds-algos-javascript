// In JS, Object is an example of Hash Tables
// Hash Functions converts the key of a key-value pair to an index in an array
// Dealing with Collisions - Seperate Chaining (2-D array implementation - mostly used) and Linear Probing

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let primeNum = 19
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = Math.abs(char.charCodeAt(0) - 96) // char.charCodeAt(0) gives ASCII value of the character i.e. 'a' = 97, 'b' = 98, etc.
      total = (total * primeNum + value) % this.keyMap.length
    }
    return total
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }

  values() {
    let valuesArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }

  keys() {
    let keysArr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
}

let hashTable = new HashTable()

hashTable.set('A', '123')
hashTable.set('B', '456')
hashTable.set('C', '789')
hashTable.set('D', '529')
hashTable.set('D', '529')

console.log(hashTable)

console.log(hashTable.get('C'))
console.log(hashTable.get('D'))

console.log(hashTable.values())
console.log(hashTable.keys())
