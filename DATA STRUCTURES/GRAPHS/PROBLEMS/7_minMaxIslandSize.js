// a grid (2-D array) would be given with L and W, where L is the land and W is the water.
// Find the minimum and maximum island size in the grid.
// Positions are considerd as nodes and the edges are the adjacent nodes in the 2-D array of grid.

const exploreGrid = (grid, row, col, visited) => {
  // to check if the node is inbounds
  const rowInbounds = row >= 0 && row < grid.length
  const colInbounds = col >= 0 && col < grid[0].length
  if (!rowInbounds || !colInbounds) return 0
  // to check if the node is only land
  if (grid[row][col] === 'W') return 0
  // to make the position of the node as a string or else set will not work
  const pos = row + ',' + col
  // below 2 lines is for the case when we have already visited the node preventing infinite loop in the graph
  if (visited.has(pos)) return false
  visited.add(pos)
  let size = 1
  // exploring the adjacent nodes
  size += exploreGrid(grid, row - 1, col, visited)
  size += exploreGrid(grid, row + 1, col, visited)
  size += exploreGrid(grid, row, col - 1, visited)
  size += exploreGrid(grid, row, col + 1, visited)
  return size
}

const minSizeOfIsland = (grid) => {
  const visited = new Set()
  let minSize = Infinity
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const size = exploreGrid(grid, row, col, visited)
      if (size < minSize && size > 0) {
        minSize = size
      }
    }
  }
  return minSize
}

const maxSizeOfIsland = (grid) => {
  const visited = new Set()
  let maxSize = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const size = exploreGrid(grid, row, col, visited)
      if (size > maxSize && size > 0) {
        maxSize = size
      }
    }
  }
  return maxSize
}

//Time Complexity: O(n*m)
//Space Complexity: O(n*m)

//Test Cases
console.log(
  minSizeOfIsland([
    ['L', 'L', 'W', 'W', 'W'],
    ['L', 'L', 'L', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
  ])
) //Output: 1

console.log(
  maxSizeOfIsland([
    ['L', 'L', 'W', 'W', 'W'],
    ['L', 'L', '', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
  ])
) //Output: 8
