const { Router } = require('express')

const getBeatById = require('../handlers/beatsHandlers/getBeatById')
const getBeats = require('../handlers/beatsHandlers/getBeats')
const postBeat = require('../handlers/beatsHandlers/postBeat')
const updateBeat = require('../handlers/beatsHandlers/updateBeat')
const deleteBeat = require('../handlers/beatsHandlers/deleteBeat')

const beatsRoutes = Router()

beatsRoutes.get('/', getBeats)
beatsRoutes.get('/:id', getBeatById)
beatsRoutes.post('/', postBeat)
beatsRoutes.put('/:id', updateBeat)
beatsRoutes.delete('/:id', deleteBeat)

module.exports = beatsRoutes