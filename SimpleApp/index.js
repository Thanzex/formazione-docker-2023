const express = require('express')
const fs = require('fs')
const fetch = require('node-fetch')

const app = express()
const port = 3030

console.log(process.env)
app.use(logger())

app.use('/', express.static('public'))

app.get('/health', (req, res) => {
  res.status(200)
  res.send('Ok')
})

app.get('/message', (req, res) => {
  if (!process.env.MESSAGE)
    res.send('No Message.')
  else
    res.send(process.env.MESSAGE)
})

app.get('/increment', (req, res) => {
  if (!fs.existsSync('counter.txt')) {
    fs.writeFileSync('counter.txt', '0')
  }
  const counter = fs.readFileSync('counter.txt', 'utf8')
  fs.writeFileSync('counter.txt', `${parseInt(counter) + 1}`)
  res.send(`Current count: ${counter}`)
})

app.get('/quote', async (req, res) => {
  if (!process.env.BACKEND) {
    res.status(500)
    res.send('No Backend configured')
  }
  
  try {
    const response = await fetch('http://' + process.env.BACKEND + '/quote')
    const quote = await response.json()
    res.send(quote)
  }
  catch(err) {
    res.status(500)
    res.send(err)
  }
})

app.listen(port)

function logger() {
  return (req, res, next) => {
    console.log(`${req.method} : ${req.url}`)
    next()
  }
}
