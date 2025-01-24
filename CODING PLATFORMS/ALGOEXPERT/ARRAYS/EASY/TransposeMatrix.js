// PROBLEM STATEMENT:

// You're given a 2D array of integers matrix. Write a function that returns the transpose of the matrix.

// The transpose of a matrix is a flipped version of the original matrix across
// its main diagonal (which runs from top-left to bottom-right); it switches
// the row and column indices of the original matrix.

// You can assume the input matrix always has at least 1 value; however its
// width and height are not necessarily the same.

// INPUT:
// matrix = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ]

// OUTPUT:
// [
//   [1, 3, 5],
//   [2, 4, 6]
// ]

function transposeMatrix(matrix) {
  const result = []
  for (let i in matrix) {
    for (let j in matrix[i]) {
      if (result[j] === undefined) result.push([])
      result[j].push(matrix[i][j])
    }
  }
  return result
}

console.log(
  transposeMatrix([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
)
