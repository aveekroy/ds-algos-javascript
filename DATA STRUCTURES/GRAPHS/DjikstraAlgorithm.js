// Usefulness
// GPS, Network Routing of Packets, Model of virus spreading in human body, airline tickets - cheapest route to your destination
class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element.priority >= parent.priority) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }

  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    if (this.values.length > 0) {
      this.values[0] = end
      this.sinkDown()
    }
    return min
  }

  sinkDown() {
    let idx = 0
    const length = this.values.length
    const element = this.values[0]
    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild, rightChild
      let swap = null
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx]
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx]
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx
        }
      }

      if (swap === null) break
      this.values[idx] = this.values[swap]
      this.values[swap] = element
      idx = swap
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight })
      this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let shortestPath = []
    let smallest
    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }
      previous[vertex] = null
    }
    console.log(nodes)
    console.log(distances)
    console.log(previous)
    // as long as there is something to visit  - Priority Queue
    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      // Below runs only when we reach the destination vertex
      if (smallest === finish) {
        //We are done and build a path
        while (previous[smallest]) {
          shortestPath.push(smallest)
          smallest = previous[smallest]
        }
        break
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate new distance to neighboring node
          let newDistance = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (newDistance < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = newDistance
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, newDistance)
          }
        }
      }
    }
    return shortestPath.concat(smallest).reverse()
  }
}

let weightedGraph = new WeightedGraph()

weightedGraph.addVertex('A')
weightedGraph.addVertex('B')
weightedGraph.addVertex('C')
weightedGraph.addVertex('D')
// weightedGraph.addVertex('E')
// weightedGraph.addVertex('F')

console.log('----- ADD VERTEX --------')
console.log(weightedGraph)

weightedGraph.addEdge('A', 'B', 4)
weightedGraph.addEdge('A', 'C', 1)
// weightedGraph.addEdge('B', 'E', 3)
weightedGraph.addEdge('C', 'D', 4)
weightedGraph.addEdge('B', 'D', 1)
weightedGraph.addEdge('B', 'C', 2)
// weightedGraph.addEdge('C', 'F', 4)
// weightedGraph.addEdge('D', 'E', 3)
// weightedGraph.addEdge('D', 'F', 1)
// weightedGraph.addEdge('E', 'F', 1)

console.log('------- ADD EDGE ------')
console.log(weightedGraph.adjacencyList)

console.log(weightedGraph.Dijkstra('A', 'D'))
