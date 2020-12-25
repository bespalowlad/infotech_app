const { Router } = require('express')
const { getCharacters } = require('../controllers/character.controllers')

const router = Router()

router.get('/characters', getCharacters)

module.exports = router