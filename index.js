const express = require('express')
const helmet = require('helmet')
const projectRouter = require('./project/projects-router')

const server = express()
const port = process.env.PORT || 4001

server.use(helmet())
server.use(express.json())

server.get('/', (req, res, next) => {
    res.send('<h1>Welcome to Business API</h1>')
})

server.use('/api', projectRouter)

server.use((err, req, res, next) => {
    console.log('Error:', err)
    res.status(500).json({
        message: "Oh Man... It's not you it's me. I swear!"
    })
})

server.listen(port, () => {
    console.log(`Listening on port:${port}`)
})