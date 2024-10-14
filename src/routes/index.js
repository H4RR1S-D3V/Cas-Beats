const { Router } = require('express')

const routes = Router()

routes.use('/', () => {
    console.log("Primera Prueba")
})

module.exports = routes