const routes = require('./routes/index.js')

const express = require('express')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use("/", routes)

module.exports = server