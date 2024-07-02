// Need to understand - cannot get anything from this code

class Node {
  constructor(position, parent = null, g = 0, h = 0) {
    this.position = position
    this.parent = parent
    this.g = g // Cost from start to node
    this.h = h // Heuristic cost from node to goal
    this.f = g + h // Total cost
  }
}

class PriorityQueue {
  constructor() {
    this.heap = []
  }

  isEmpty() {
    return this.heap.length === 0
  }

  enqueue(node) {
    this.heap.push(node)
    this.heap.sort((a, b) => a.f - b.f) // Min-heap based on f value
  }

  dequeue() {
    return this.heap.shift()
  }
}

function heuristic(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1])
}

function aStar(start, goal, grid) {
  const openList = new PriorityQueue()
  const closedList = new Set()
  const startNode = new Node(start, null, 0, heuristic(start, goal))

  openList.enqueue(startNode)

  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0], // Up, Down, Left, Right
  ]

  while (!openList.isEmpty()) {
    const currentNode = openList.dequeue()
    const [x, y] = currentNode.position

    if (x === goal[0] && y === goal[1]) {
      // Goal reached, reconstruct the path
      const path = []
      let temp = currentNode
      while (temp) {
        path.push(temp.position)
        temp = temp.parent
      }
      return path.reverse()
    }

    closedList.add(currentNode.position.toString())

    for (const [dx, dy] of directions) {
      const neighborPos = [x + dx, y + dy]
      if (
        neighborPos[0] >= 0 &&
        neighborPos[0] < grid.length &&
        neighborPos[1] >= 0 &&
        neighborPos[1] < grid[0].length &&
        grid[neighborPos[0]][neighborPos[1]] === 0 &&
        !closedList.has(neighborPos.toString())
      ) {
        const g = currentNode.g + 1 // Cost from start to neighbor
        const h = heuristic(neighborPos, goal)
        const neighborNode = new Node(neighborPos, currentNode, g, h)

        if (
          !openList.heap.some(
            (node) =>
              node.position.toString() === neighborPos.toString() && node.g <= g
          )
        ) {
          openList.enqueue(neighborNode)
        }
      }
    }
  }

  return [] // No path found
}
