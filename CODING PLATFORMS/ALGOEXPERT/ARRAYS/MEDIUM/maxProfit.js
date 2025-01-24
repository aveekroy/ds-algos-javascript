function maxProfit(pricesArr) {
  let maxProfit = -1
  let buyPrice = 0
  let sellPrice = 0
  let changeBuyPrice = true
  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i]
    sellPrice = pricesArr[i + 1]

    if (sellPrice < buyPrice) {
      changeBuyPrice = true
    } else {
      let tempProfit = sellPrice - buyPrice
      if (tempProfit > maxProfit) {
        console.log('Buying Price:', buyPrice)
        console.log('Selling Price:', sellPrice)
        maxProfit = tempProfit
      }
      changeBuyPrice = false
    }
  }
  console.log('Max Profit:', maxProfit)
  return maxProfit
}

// function maxProfitStock(pricesArr) {
//   let maxProfit = -1
//   let buyPrice = 0
//   let sellPrice = 0
//   let changeBuyPrice = true
//   for (let i = 0; i < pricesArr.length; i++) {
//     if (changeBuyPrice) buyPrice = pricesArr[i]
//     sellPrice = pricesArr[i + 1]

//     if (sellPrice < buyPrice) {
//       changeBuyPrice = true
//     } else {
//       let tempProfit = sellPrice - buyPrice
//       if (tempProfit > maxProfit) {
//         console.log('Buying Price:', buyPrice)
//         console.log('Selling Price:', sellPrice)
//         maxProfit = tempProfit
//       }
//       changeBuyPrice = false
//     }
//   }
//   console.log('Max Profit:', maxProfit)
//   return maxProfit
// }

console.log(maxProfit([32, 46, 26, 38, 40, 48, 42, 66]))
