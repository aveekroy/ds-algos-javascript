const linearSearch = (array, numToSearch) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numToSearch) {
      return true
    }
  }
  return false
}

console.log(linearSearch([1, 2, 4, 5, 6, 9], 19))
