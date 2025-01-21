// Need to find if there is a path between two nodes in an undirected graph (edges have been provided)
// cycles need to be considered
// input: graph, node1, node2

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

const hasPathInUndirectedGraph = (edges, src, dst) => {
  const graph = buildGraphFromEdges(edges) //Adjacency list
  console.log(graph)
  return hasPath(graph, src, dst, new Set())
}

const buildGraphFromEdges = (edges) => {
  const graph = {}
  for (let edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const hasPath = (graph, src, dst, visited) => {
  console.log(visited)
  if (src === dst) return true
  if (visited.has(src)) return false
  visited.add(src)
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true
  }
  return false
}

// console.log(hasPathInUndirectedGraph(edges, 'i', 'j')) // true

// console.log(hasPathInUndirectedGraph(edges, 'i', 'm')) // true
console.log(hasPathInUndirectedGraph(edges, 'i', 'l')) // true
// console.log(hasPathInUndirectedGraph(edges, 'i', 'o')) // false
// console.log(hasPathInUndirectedGraph(edges, 'i', 'n')) // false
// console.log(hasPathInUndirectedGraph(edges, 'i', 'k')) // true
// console.log(hasPathInUndirectedGraph(edges, 'i', 'i')) // true
// console.log(hasPathInUndirectedGraph(edges, 'i', 'z')) // false
// console.log(hasPathInUndirectedGraph(edges, 'i', 'a')) // false
