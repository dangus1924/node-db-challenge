const express = require('express')
const helmet = require('helmet')

const server = express()
const port = process.env.PORT || 4001

server.use(helmet())
server.use(express.json())

server.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Business API</h1>')
})


server.listen(port, () => {
    console.log(`Listening on port:${port}`)
})