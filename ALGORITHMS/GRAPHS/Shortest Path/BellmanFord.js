// Bellman Ford Algorithm
// Time Complexity: O(V*E), Space Complexity: O(V)
// V = Number of vertices, E = Number of edges
// Bellman Ford Algorithm is used to find the shortest path from a source vertex to all other vertices in a graph with negative weights.
// It can also detect negative weight cycles in the graph.
// It works by relaxing all the edges V-1 times, where V is the number of vertices in the graph.
// If there is a negative weight cycle, it will be detected in the Vth iteration.
// Bellman Ford Algorithm can be used to find the shortest path in a graph with negative weights.

// Bellman Ford Algorithm Implementation

class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices
    this.adjacencyMatrix = Array(numVertices)
      .fill(null)
      .map(() => Array(numVertices).fill(0)) // Initialize with 0s
    this.vertexMap = new Map() // Map vertex names to indices
    this.reverseVertexMap = new Map() // Map indices to vertex names
    this.nextIndex = 0
  }

  addVertex(vertex) {
    if (!this.vertexMap.has(vertex)) {
      this.vertexMap.set(vertex, this.nextIndex)
      this.reverseVertexMap.set(this.nextIndex, vertex)
      this.nextIndex++
    }
  }

  addEdge(vertex1, vertex2, weight) {
    const i = this.vertexMap.get(vertex1)
    const j = this.vertexMap.get(vertex2)
    if (i !== undefined && j !== undefined) {
      this.adjacencyMatrix[i][j] = weight
    }
  }

  printGraph() {
    for (let i = 0; i < this.numVertices; i++) {
      let row = ''
      for (let j = 0; j < this.numVertices; j++) {
        row += this.adjacencyMatrix[i][j] + ' '
      }
      console.log(row)
    }
  }

  getNeighbors(vertex) {
    const i = this.vertexMap.get(vertex)
    const neighbors = []
    for (let j = 0; j < this.numVertices; j++) {
      if (this.adjacencyMatrix[i][j] !== 0) {
        neighbors.push(this.reverseVertexMap.get(j))
      }
    }
    return neighbors
  }

  getWeight(vertex1, vertex2) {
    const i = this.vertexMap.get(vertex1)
    const j = this.vertexMap.get(vertex2)
    if (i !== undefined && j !== undefined) {
      return this.adjacencyMatrix[i][j]
    }
    return undefined
  }
}

function bellmanFord(graph, source) {
  const numVertices = Object.keys(graph.adjacencyList).length
  const vertices = Object.keys(graph.adjacencyList)
  const distances = {}
  const predecessors = {}

  for (const vertex of vertices) {
    distances[vertex] = Infinity
    predecessors[vertex] = null
  }
  distances[source] = 0

  for (let i = 0; i < numVertices - 1; i++) {
    for (const u of vertices) {
      for (const v in graph.adjacencyList[u]) {
        // Iterate through neighbors
        const weight = graph.adjacencyList[u][v]
        if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
          distances[v] = distances[u] + weight
          predecessors[v] = u
        }
      }
    }
  }

  // Check for negative cycles
  for (const u of vertices) {
    for (const v in graph.adjacencyList[u]) {
      const weight = graph.adjacencyList[u][v]
      if (distances[u] !== Infinity && distances[u] + weight < distances[v]) {
        return 'Graph contains negative cycle'
      }
    }
  }

  return { distances, predecessors }
}

// Example usage:
const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A', 'B', 4)
graph.addEdge('A', 'C', 2)
graph.addEdge('B', 'C', 1)
graph.addEdge('B', 'D', 5)
graph.addEdge('C', 'D', 1)

const sourceNode = 'A'
const result = bellmanFord(graph, sourceNode)

if (typeof result === 'string') {
  console.log(result)
} else {
  console.log(
    'Shortest distances from source node',
    sourceNode + ':',
    result.distances
  )
  console.log('Predecessors:', result.predecessors)

  const destinationNode = 'D'
  let path = []
  let current = destinationNode
  while (current !== null) {
    path.unshift(current)
    current = result.predecessors[current]
  }
  console.log(`Shortest path to node ${destinationNode}:`, path)
}

// Example with Negative Cycle
const graphNegativeCycle = new Graph()
graphNegativeCycle.addVertex('A')
graphNegativeCycle.addVertex('B')
graphNegativeCycle.addVertex('C')

graphNegativeCycle.addEdge('A', 'B', -1)
graphNegativeCycle.addEdge('B', 'C', -2)
graphNegativeCycle.addEdge('C', 'A', -3)

const resultNegative = bellmanFord(graphNegativeCycle, 'A')
console.log(resultNegative) // Output: Graph contains negative cycle

// More Complex Example
const graph2 = new Graph()
graph2.addVertex('A')
graph2.addVertex('B')
graph2.addVertex('C')
graph2.addVertex('D')

graph2.addEdge('A', 'B', 4)
graph2.addEdge('A', 'C', 2)
graph2.addEdge('B', 'B', 5) // Self-loop
graph2.addEdge('B', 'C', 1)
graph2.addEdge('B', 'D', 5)
graph2.addEdge('C', 'D', 1)
graph2.addEdge('D', 'A', 3)
graph2.addEdge('D', 'B', -2) // Negative edge for testing

const sourceNode2 = 'A'
const result2 = bellmanFord(graph2, sourceNode2)

if (typeof result2 === 'string') {
  console.log(result2)
} else {
  console.log(
    'Shortest distances from source node',
    sourceNode2 + ':',
    result2.distances
  )
  console.log('Predecessors:', result2.predecessors)

  const destinationNode2 = 'D'
  let path2 = []
  let current2 = destinationNode2
  while (current2 !== null) {
    path2.unshift(current2)
    current2 = result2.predecessors[current2]
  }
  console.log(`Shortest path to node ${destinationNode2}:`, path2)
}
