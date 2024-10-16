const { Router } = require('express')

const updateUser = require('../handlers/usersHandlers/updateUser')
const postUser = require('../handlers/usersHandlers/postUser')
const deleteUser = require('../handlers/usersHandlers/deleteUser')
const getUserInfo = require('../handlers/usersHandlers/getUderInfo')

const userRoutes = Router()

userRoutes.put('/:id', updateUser)
userRoutes.post('/', postUser)
userRoutes.delete('/:id', deleteUser)
userRoutes.get('/:id', getUserInfo)

module.exports = userRoutes