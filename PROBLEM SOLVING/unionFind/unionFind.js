// Union Find (Disjoint Set)

// Approach:
// Union find is a data structure that keeps track of disjoint sets and performs two main operations: union and find.
// It’s commonly used for problems involving connectivity in graphs or sets of elements.

// Steps to Implement:
// 1. Initialize each element as its own set with a unique identifier.
// 2. Implement find operation to find the representative element of the set.
// 3. Implement union operation to merge two sets by updating their representative elements.
// 4. Use path compression and union by rank/heuristic to optimize the find and union operations.

// When to Use:
// - Problems involving connectivity or disjoint sets of elements.
// - Implementing algorithms like Kruskal’s minimum spanning tree or detecting cycles in a graph.

// Tips:
// - Optimize the union find operations using path compression and union by rank/heuristic for better performance.
// - Union find can be extended to solve various graph-related problems efficiently.

// Use Case:
// Problem: Implement union find to determine the connected components in a graph.

// STUDY more about this - not understanding this
class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(-1)
  }

  find(x) {
    if (this.parent[x] === -1) return x
    return this.find(this.parent[x])
  }

  union(x, y) {
    const rootX = this.find(x)
    console.log(rootX)

    const rootY = this.find(y)
    console.log(rootY)
    if (rootX !== rootY) {
      this.parent[rootX] = rootY
    }
  }
}

const uf = new UnionFind(5)
uf.union(0, 1)
uf.union(1, 2)
uf.union(2, 3)
console.log(uf.parent)
console.log(uf.find(4))
