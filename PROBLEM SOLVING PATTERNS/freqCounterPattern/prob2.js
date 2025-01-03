// Write a function called same which accepts two arrays and the function should return true if every value in the array has its corresponding values
// squared in the second array.So in the first array there's a bunch of values and we want to know if the second array has the exact
// same values but squared. But the order doesn't matter. So it doesn't have to be identical, just squared.
// It can be mixed up, but the frequency of values must be the same.

// FREQUENCY COUNTER PATTERN - PROBLEM SOLVING

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  const freqCounter1 = {}
  const freqCounter2 = {}
  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1
  }
  console.log(freqCounter1)
  console.log(freqCounter2)
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3, 4, 2, 5], [1, 4, 9, 16, 4, 25]))
