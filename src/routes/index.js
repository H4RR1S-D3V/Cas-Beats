const { Router } = require('express')
const beatsRoutes = require('./beatsRoutes')
const userRoutes = require('./userRoutes')

const routes = Router()

routes.use('/beats', beatsRoutes)
routes.use('/users', userRoutes)

module.exports = routes