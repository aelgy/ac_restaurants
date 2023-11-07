const express = require('express')
const app = express()
const port = 3000
const { engine } = require('express-handlebars')
const restaurants = require('./public/jsons/restaurant.json').results

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/restaurants');
})

app.get('/restaurants', (req, res) => {
  res.render('index', { restaurants });
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id;
  const restaurant = restaurants.find((rest) => rest.id.toString() === id)
  res.render('detail', { restaurant });
})

app.listen(port, () => {
  console.log(`1st localhost on http://localhost:${port}`)
})