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

  DFSRecursive(startVertex) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList
    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    }
    dfs(startVertex)
    return result
  }

  DFSIterative(startVertex) {
    const stack = [startVertex]
    const result = []
    const visited = {}
    let currVertex

    visited[startVertex] = true
    while (stack.length) {
      currVertex = stack.pop()
      result.push(currVertex)
      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
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

console.log('------- DFS Recursive ------')
console.log(myGraph.DFSRecursive('A'))

console.log('------- DFS Iterative ------')
console.log(myGraph.DFSIterative('A'))
