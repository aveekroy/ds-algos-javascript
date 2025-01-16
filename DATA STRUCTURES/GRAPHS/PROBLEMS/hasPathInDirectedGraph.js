// find if there is a path between two nodes in a directed graph
// input: graph, node1, node2

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

// using BFS - iterative way
const hasPathInDirectedGraph = (graph, src, dst) => {
  const queue = [src]
  while (queue.length > 0) {
    const current = queue.shift()
    if (current === dst) return true
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
  return false
}

// recursive way
const hasPathInDirectedGraphIterative = (graph, src, dst) => {
  //write using iterative way
  if (src === dst) return true
  for (let neighbor of graph[src]) {
    if (hasPathInDirectedGraphIterative(graph, neighbor, dst)) return true
  }
  return false
}

console.log(hasPathInDirectedGraph(graph, 'a', 'f')) // true
console.log(hasPathInDirectedGraph(graph, 'a', 'e')) // true
console.log(hasPathInDirectedGraph(graph, 'a', 'a')) // true
console.log(hasPathInDirectedGraph(graph, 'a', 'z')) // false
console.log(hasPathInDirectedGraph(graph, 'a', 'b')) // true
console.log(hasPathInDirectedGraph(graph, 'a', 'c')) // true
console.log(hasPathInDirectedGraph(graph, 'a', 'd')) // true
console.log('----------------------')
console.log(hasPathInDirectedGraphIterative(graph, 'a', 'f')) // true
console.log(hasPathInDirectedGraphIterative(graph, 'a', 'e')) // true
console.log(hasPathInDirectedGraphIterative(graph, 'a', 'a')) // true
console.log(hasPathInDirectedGraphIterative(graph, 'a', 'z')) // false
console.log(hasPathInDirectedGraphIterative(graph, 'a', 'b')) // true
console.log(hasPathInDirectedGraphIterative(graph, 'a', 'c')) // true
console.log(hasPathInDirectedGraphIterative(graph, 'a', 'd')) // true
