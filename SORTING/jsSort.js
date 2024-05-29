// Javascript inbuilt sort function

console.log([6, 4, 15, 10].sort()) // - weird behavior as it sorts on unicode characters

function numberCompare(num1, num2) {
  return num1 - num2
}
console.log([6, 4, 15, 10].sort(numberCompare))

function compareByLength(str1, str2) {
  return str1.length - str2.length
}

// To create an array with 100000 elements
// var data = Array.apply(null, { length: 100000 }).map(Function.call, Math.random)

console.log(
  ['Aveek', 'Roy', 'Data Structures', 'Algorithms'].sort(compareByLength)
)

function compareByFirst(a, b) {
  return a[0] - b[0]
}

console.log(
  [
    [8, 9],
    [3, 4],
    [6, 7],
    [1, 2],
  ].sort(compareByFirst)
)
