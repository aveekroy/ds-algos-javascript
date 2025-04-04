// BFS _ Graph Traversal

// Breadth First Search (BFS) is a graph traversal algorithm that explores all the vertices of a graph in breadth-first order, i.e., it visits all the neighbors of a vertex before moving on to the next level neighbors.
// BFS uses a queue data structure to keep track of the vertices to be explored next. It is useful for finding the shortest path in an unweighted graph and for tasks such as level-order traversal of trees.

// BFS is particularly useful for finding the shortest path in an unweighted graph, as it explores all vertices at the present depth level before moving on to vertices at the next depth level.
// BFS can also be used for tasks such as finding connected components in a graph, checking bipartiteness, and solving puzzles like the shortest path in a maze.

// BFS can be implemented using a queue. Here, we'll implement BFS for both directed and undirected graphs.
const bfs = (graph, start) => {
  const queue = [start]
  const visited = new Set()
  const result = []

  while (queue.length > 0) {
    const node = queue.shift()

    if (visited.has(node)) continue

    visited.add(node)
    result.push(node)

    for (const neighbor of graph[node]) {
      queue.push(neighbor)
    }
  }
  return result
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

console.log('BFS:')
console.log(bfs(graph, 0))
// Output: 0 1 2 3 4 5
