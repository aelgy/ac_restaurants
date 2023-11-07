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
  const keyword = req.query.keyword || '';
  const matchedRests = restaurants.filter((rest) =>
    rest.name.toLowerCase().includes(keyword.toLowerCase()) ||
    rest.category.includes(keyword) ||
    rest.name_en.toLowerCase().includes(keyword.toLowerCase())
  )
  res.render('index', { restaurants: matchedRests, keyword })
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id;
  const restaurant = restaurants.find((rest) => rest.id.toString() === id)
  res.render('detail', { restaurant });
})

app.listen(port, () => {
  console.log(`1st localhost on http://localhost:${port}`)
})