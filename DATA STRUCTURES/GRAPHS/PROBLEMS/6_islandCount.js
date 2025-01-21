// a grid (2-D array) would be given with L and W, where L is the land and W is the water. Find the number of islands in the grid.
// Positions are considerd as nodes and the edges are the adjacent nodes in the 2-D array of grid.
//Example:
// Input: [
//   ['L', 'L', 'W', 'W', 'W'],
//   ['L', 'L', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'L', 'L'],
//   ['W', 'L', 'L', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'L'],
// ]
// Output: 4

//Solution:

const explore = (grid, row, col, visited) => {
  // to check if the node is inbounds
  const rowInbounds = row >= 0 && row < grid.length
  const colInbounds = col >= 0 && col < grid[0].length
  if (!rowInbounds || !colInbounds) return false
  // to check if the node is only land
  if (grid[row][col] === 'W') return false
  // to make the position of the node as a string or else set will not work
  const pos = row + ',' + col
  // below 2 lines is for the case when we have already visited the node preventing infinite loop in the graph
  if (visited.has(pos)) return false
  visited.add(pos)
  // exploring the adjacent nodes
  explore(grid, row - 1, col, visited)
  explore(grid, row + 1, col, visited)
  explore(grid, row, col - 1, visited)
  explore(grid, row, col + 1, visited)
  return true
}

const islandCount = (grid) => {
  const visited = new Set()
  let count = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (explore(grid, row, col, visited)) {
        count++
      }
    }
  }
  return count
}

//Time Complexity: O(n*m)
//Space Complexity: O(n*m)

//Test Cases
console.log(
  islandCount([
    ['L', 'L', 'W', 'W', 'W'],
    ['L', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
  ])
) //Output: 4
console.log(
  islandCount([
    ['L', 'L', 'W', 'W', 'W'],
    ['L', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'L', 'L'],
  ])
) //Output: 4
console.log(
  islandCount([
    ['L', 'L', 'W', 'W', 'W'],
    ['L', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'L', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'L'],
    ['W', 'W', 'W', 'L', 'L'],
  ])
) //Output: 8
