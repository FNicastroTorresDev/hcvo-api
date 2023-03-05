const express = require('express')
const app = express()

app.use(express.json())

app.use(express.static('public'))

app.use('/', (req, res) => {
  res.json('Hola Mundo')
})

app.listen(8000, () => {
  console.log('Server on port 8000')
})