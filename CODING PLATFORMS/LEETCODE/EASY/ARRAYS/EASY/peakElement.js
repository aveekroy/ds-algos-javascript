const peakElement = (arr) => {
  // Code here
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      return true
    }
  }
  return false
}

console.log(peakElement([1, 2, 3, 4, 5])) // false
console.log(peakElement([1, 2, 3, 4, 1])) // true
console.log(peakElement([1, 2, 4, 5, 7, 8, 3])) // true
