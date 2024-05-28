// PROBLEM STATEMENT:

// You walk into a theatre you're about to see a show in. The usher within the
// theatre walks you to your row and mentions you're allowed to sit anywhere
// within the given row. Naturally you'd like to sit in the seat that gives you
// the most space. You also would prefer this space to be evenly distributed on
// either side of you (e.g. if there are three empty seats in a row, you would
// prefer to sit in the middle of those three seats).

// Given the theatre row represented as an integer array, return
// the seat index of where you should sit. Ones represent occupied seats and zeroes
// represent empty seats.

// You may assume that someone is always sitting in the
// first and last seat of the row. Whenever there are two equally good seats,
// you should sit in the seat with the lower index. If there is no seat to sit
// in, return -1. The given array will always have a length of at least one
// and contain only ones and zeroes.

// INPUT: seats  = [1, 0, 1, 0, 0, 0, 1]

// OUTPUT: 4

function bestSeats(seats) {
  let bestSeatIdx = -1
  let currSpace = 0
  let bestSpace = 0
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      currSpace = 0
    } else {
      currSpace++
      if (currSpace > bestSpace) {
        bestSpace = currSpace
        bestSeatIdx = i - Math.floor(currSpace / 2)
      }
    }
  }
  return bestSeatIdx
}

console.log(bestSeats([1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]))
