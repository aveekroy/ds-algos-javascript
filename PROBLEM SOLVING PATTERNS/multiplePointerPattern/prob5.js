// the function you need to implement is called count unique values and it should accept a sorted array
// again and it returns the count of unique values in that array.
// And it can have negative numbers in there, but it will always be sorted.

// MULTIPLE POINTERS PATTERN - PROBLEM SOLVING

// const countUniqueValues = (arr) => {
//   if (arr.length === 0) return 0
//   let i = 0
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++
//       arr[i] = arr[j]
//     }
//   }
//   return i + 1
// }

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0
  let result = {}
  for (let val of arr) {
    result[val] = (result[val] || 0) + 1
  }
  console.log(result)
  return Object.keys(result).length
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 3, 4, 4, 5]))
