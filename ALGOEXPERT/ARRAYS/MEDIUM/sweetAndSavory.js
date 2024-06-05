// PROBLEM STATEMENT:

// INPUT:

// OUTPUT:

function sweetAndSavory(dishes, target) {
  let sweetDishes = dishes.filter((item) => item < 0)
  let sortedSweetDishes = sweetDishes.sort((a, b) => Math.abs(a) - Math.abs(b))
  console.log(sortedSweetDishes)

  let savoryDishes = dishes.filter((item) => item > 0)
  let sortedSavoryDishes = savoryDishes.sort((a, b) => a - b)
  console.log(sortedSavoryDishes)

  let bestPair = [0, 0]
  let bestDiff = Infinity

  let sweetIdx = 0
  let savoryIdx = 0

  while (
    sweetIdx < sortedSweetDishes.length &&
    savoryIdx < sortedSavoryDishes.length
  ) {
    let currSum = sortedSweetDishes[sweetIdx] + sortedSavoryDishes[savoryIdx]
    if (currSum <= target) {
      let currDiff = target - currSum
      if (currDiff < bestDiff) {
        bestDiff = currDiff
        bestPair = [sortedSweetDishes[sweetIdx], sortedSavoryDishes[savoryIdx]]
      }
      savoryIdx++
    } else {
      sweetIdx++
    }
  }
  return bestPair
}

console.log(sweetAndSavory([-12, 13, 100, -53, 540, -538, 53, 76, 32, -63], 42))
