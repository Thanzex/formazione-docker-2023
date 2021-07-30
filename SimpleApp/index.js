const express = require('express')

const app = express()
const port = 3030

app.use('/', express.static('public'))

app.get('/alive', (req, res) => {
  res.status(200)
  res.send('Ok')
})

app.listen(port)
