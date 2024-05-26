// PROBLEM STATEMENT:

// INPUT:

// OUTPUT:

function rotateImage() {
  let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  let result = [[], [], []]

  for (let i = 0; i < array.length; i++) {
    let idx = array.length - 1
    for (let j = 0; j < array[i].length; j++) {
      result[i][j] = array[idx][i]
      idx--
    }
  }
  console.log(result)
}

rotateImage()
