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
  BFS(startVertex) {
    const queue = [startVertex]
    const result = []
    const visited = {}
    let currVertex
    visited[startVertex] = true

    while (queue.length) {
      currVertex = queue.shift()
      result.push(currVertex)
      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          queue.push(neighbor)
        }
      })
    }
    return result
  }
}

let myGraph = new Graph()

myGraph.addVertex('A')
myGraph.addVertex('B')
myGraph.addVertex('C')
myGraph.addVertex('D')
myGraph.addVertex('E')
myGraph.addVertex('F')

console.log('----- ADD VERTEX --------')
console.log(myGraph)

myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('B', 'D')
myGraph.addEdge('C', 'E')
myGraph.addEdge('D', 'E')
myGraph.addEdge('D', 'F')
myGraph.addEdge('E', 'F')

console.log('------- ADD EDGE ------')
console.log(myGraph)

console.log('------- BFS ------')
console.log(myGraph.BFS('A'))
