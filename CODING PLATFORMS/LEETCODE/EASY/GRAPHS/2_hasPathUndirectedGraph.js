// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive).
// The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi.
// Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.

var buildGraphFromEdges = function (edges) {
  const graph = {}
  for (let edge of edges) {
    const [a, b] = edge
    if (!graph[a]) graph[a] = []
    if (!graph[b]) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

var hasPath = function (graph, src, dst, visited) {
  console.log(visited)
  if (src === dst) return true
  if (visited.has(src)) return false
  visited.add(src)
  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) return true
  }
  return false
}

var validPath = function (n, edges, source, destination) {
  const graph = buildGraphFromEdges(edges)
  console.log(graph)
  return hasPath(graph, source, destination, new Set())
}

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
) // true
