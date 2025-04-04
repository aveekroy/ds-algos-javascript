// DFS - Graph Traversal

// Depth First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking.
// It uses a stack data structure, either explicitly or through recursion, to keep track of the vertices to be explored next.
// DFS is useful for tasks such as topological sorting, cycle detection, and finding connected components in a graph.

// DFS can be implemented using recursion or an explicit stack. Here, we'll implement both methods for clarity.

// Iterative DFS using a stack
const dfsIterative = (graph, start) => {
  const stack = [start]
  const visited = new Set()
  const result = []

  while (stack.length > 0) {
    const node = stack.pop()
    if (visited.has(node)) continue
    visited.add(node)
    result.push(node)
    for (const neighbor of graph[node]) {
      stack.push(neighbor)
    }
  }
  return result
}

// Recursive DFS
const dfsRecursive = (graph, start, visited = new Set()) => {
  if (visited.has(start)) return []
  visited.add(start)
  for (const neighbor of graph[start]) {
    dfsRecursive(graph, neighbor, visited)
  }
}

// Example usage:
const graph = {
  0: [1, 2],
  1: [0, 3, 4],
  2: [0],
  3: [1],
  4: [1, 5],
  5: [4],
}

console.log('DFS Recursive:')
console.log(dfsRecursive(graph, 0))
console.log('DFS Iterative:')
console.log(dfsIterative(graph, 0))
