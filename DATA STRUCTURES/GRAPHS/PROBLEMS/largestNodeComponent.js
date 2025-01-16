// given a graph, we need to find the largest connected component in the graph
// (i.e the one having the maximum number of nodes)
// input: graph
// output: largest component size

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
}

const largestNodeComponent = (graph) => {
  const visited = new Set()
  let max = 0
  for (let node in graph) {
    const size = explore(graph, node, visited)
    max = Math.max(max, size)
  }
  return max
}

const explore = (graph, current, visited) => {
  if (visited.has(String(current))) return 0
  visited.add(String(current))
  let size = 1
  for (let neighbor of graph[current]) {
    size += explore(graph, neighbor, visited)
  }
  return size
}

console.log(largestNodeComponent(graph)) // 4
