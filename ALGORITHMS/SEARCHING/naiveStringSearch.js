// Finding a substring inside a string

function naiveSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}

// function naiveSearch(long, short) {
//   let longArr = long.toString()
//   let shortArr = short.toString()
//   let count = 0
//   for (let i = 0; i < longArr.length; i++) {
//     while (j < shortArr.length) {
//       if (longArr[i] === shortArr[j]) {
//         count++
//       }
//     }
//   }
// }

console.log(naiveSearch('jhfcnbvhfvfjhfhfjdhfjhjfdjhfdjsdhf jhf', 'jhf'))
