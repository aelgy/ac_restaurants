const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/restaurants');
})

app.get('/restaurants', (req, res) => {
  res.send('find restaurants');
})

app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id;
  res.send(`see restaurant: ${id}`);
})

app.listen(port, () => {
  console.log(`1st localhost on http://localhost:${port}`)
})