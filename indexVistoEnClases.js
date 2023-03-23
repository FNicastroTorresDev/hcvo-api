// const express = require('express')
// const app = express()

const { Server } = require("./src/server");

// app.use(express.json())

// app.use(express.static('public'))

// app.get('/api', (req, res) => {
//   res.json('GET request')
// })

// app.post('/api', (req, res) => {
//   res.status(201).json({
//     message: 'Petición creada.'
//   })
// })

// app.put('/api', (req, res) => {
//   res.json('PUT request')
// })

// app.patch('/api', (req, res) => {
//   res.json('PATCH request')
// })

// app.delete('/api', (req, res) => {
//   res.json('DELETE request')
// })

// app.listen(8000, () => {
//   console.log('Server on port 8000')
// })

const server = new Server()

server.listen()