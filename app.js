const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('express app for restaurants')
})

app.listen(port, () => {
  console.log(`1st localhost on http://localhost:${port}`)
})