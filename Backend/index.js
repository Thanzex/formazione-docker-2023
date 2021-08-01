const express = require('express')
const randomQuote = require('random-quotes')

const app = express()
const port = 3030

app.get('/health', (req, res) => {
  res.send('Ok.')
})

app.get('/quote',(req, res) => {
  const quote = randomQuote.default()
  res.status(200)
  res.send(quote)
})

app.listen(port)