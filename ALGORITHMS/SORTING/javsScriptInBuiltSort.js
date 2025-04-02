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

const ARTICLES = [
  {
    title: 'A message',
    upvotes: 12,
    date: '2020-01-24',
  },
  {
    title: 'Alphabet earnings',
    upvotes: 2,
    date: '2019-11-23',
  },
  {
    title: 'Alphabet earnings',
    upvotes: 33,
    date: '2019-11-23',
  },
]

function compareByUpvotes(a, b) {
  return b.upvotes - a.upvotes
}
const hello = ARTICLES.sort(compareByUpvotes)
console.log(hello)
