// find the shortest path between two nodes in a graph
// using breadth first search

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
]

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

const shortestPath = (edges, start, end) => {
  const graph = buildGraphFromEdges(edges)
  const visited = new Set()
  const queue = [[start, 0]]
  while (queue.length > 0) {
    const [node, distance] = queue.shift()
    if (node === end) return distance
    if (visited.has(node)) continue
    visited.add(node)
    for (let neighbor of graph[node]) {
      queue.push([neighbor, distance + 1])
    }
  }
  return -1
}

console.log(shortestPath(edges, 'w', 'z')) // 2
console.log(shortestPath(edges, 'w', 'y')) // 1
console.log(shortestPath(edges, 'w', 'w')) // 0
console.log(shortestPath(edges, 'w', 'v')) // 1
console.log(shortestPath(edges, 'y', 'x')) // 1
