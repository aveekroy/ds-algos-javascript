const express = require('express')
var recipes = require('./recipes.json')
const app = express()
const PORT = 3000

// Load JSON data once at startup (or you could read on every request)
const data = recipes

// Route: GET
app.get('/recipes', (req, res) => {
  const { page, limit } = req.query
  const defaultLimit = 4
  let defaultData = data.slice(0, defaultLimit)
  let filtered = defaultData
  if (page) {
    filtered = data.slice(
      defaultLimit * (page - 1),
      defaultLimit * (page - 1) + defaultLimit
    )
  }
  if (limit) {
    filtered = filtered.slice(0, limit)
  }
  res.json(filtered)
})

// module.exports = router

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
