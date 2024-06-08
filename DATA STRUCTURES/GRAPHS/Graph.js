class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }
    return false
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      return true
    }
    return false
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      )
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      )
      return true
    }
    return false
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, temp)
    }
    delete this.adjacencyList[vertex]
  }
}

let myGraph = new Graph()

myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')

console.log('----- ADD VERTEX --------')
console.log(myGraph)

myGraph.addEdge('A', 'B')
myGraph.addEdge('B', 'C')
myGraph.addEdge('A', 'C')

console.log('------- ADD EDGE ------')
console.log(myGraph)

myGraph.removeEdge('B', 'C')

console.log('------- REMOVE EDGE ------')
console.log(myGraph)

myGraph.removeVertex('C')

console.log('------- REMOVE VERTEX ------')
console.log(myGraph)
console.log('-------------')
