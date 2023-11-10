const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()

app.use('/public', express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/kontakt', (req, res) => {
  res.render('kontakt')
})

app.post('/kontakt', (req, res) => {
  console.log('form send')
})

app.listen(3000, () => {
  console.log('server running')
})
