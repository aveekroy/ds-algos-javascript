class UnionFind {
  constructor(n) {
    this.parent = new Array(n)
    this.rank = new Array(n).fill(0) // Optional optimization for Union Find

    for (let i = 0; i < n; i++) {
      this.parent[i] = i // Initially, each node is its own parent
    }
  }

  find(i) {
    if (this.parent[i] === i) {
      return i
    }
    // Path compression: Make the root of the set the parent of i directly
    return (this.parent[i] = this.find(this.parent[i]))
  }

  union(i, j) {
    const rootI = this.find(i)
    const rootJ = this.find(j)

    if (rootI !== rootJ) {
      if (this.rank[rootI] < this.rank[rootJ]) {
        // Union by rank (optional optimization)
        this.parent[rootI] = rootJ
      } else if (this.rank[rootI] > this.rank[rootJ]) {
        this.parent[rootJ] = rootI
      } else {
        this.parent[rootJ] = rootI
        this.rank[rootI]++ // Increment rank if ranks are equal
      }
      return true // Union successful (no cycle detected yet)
    }
    return false // Cycle detected: i and j already belong to the same set
  }
}

function detectCycle(edges, numNodes) {
  const uf = new UnionFind(numNodes)

  for (const edge of edges) {
    const u = edge[0]
    const v = edge[1]

    if (!uf.union(u, v)) {
      // If union returns false, a cycle is detected
      return true
    }
  }

  return false // No cycle detected
}

// Example usage:

// Graph with a cycle
const edges1 = [
  [0, 1],
  [1, 2],
  [2, 0],
]
const numNodes1 = 3
console.log('Cycle in graph 1:', detectCycle(edges1, numNodes1)) // Output: true

// Graph without a cycle
const edges2 = [
  [0, 1],
  [1, 2],
  [2, 3],
]
const numNodes2 = 4
console.log('Cycle in graph 2:', detectCycle(edges2, numNodes2)) // Output: false

// Another example with a cycle
const edges3 = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 1],
]
const numNodes3 = 4
console.log('Cycle in graph 3:', detectCycle(edges3, numNodes3)) // Output: true

// Example with disconnected components (no cycle)
const edges4 = [
  [0, 1],
  [2, 3],
]
const numNodes4 = 4
console.log('Cycle in graph 4:', detectCycle(edges4, numNodes4)) // Output: false

// Example with self-loop (cycle)
const edges5 = [[0, 0]]
const numNodes5 = 1
console.log('Cycle in graph 5:', detectCycle(edges5, numNodes5)) // Output: true
