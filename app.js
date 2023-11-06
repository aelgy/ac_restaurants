const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/restaurants')
})

app.get('/restaurants', (req, res) => {
  res.send('find restaurants')
})

app.listen(port, () => {
  console.log(`1st localhost on http://localhost:${port}`)
})