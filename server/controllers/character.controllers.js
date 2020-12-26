const Character = require('../models/character.models.js')

const characters = async (req, res) => {
    try {
        const characters = await Character.find({})

        if (characters.length === 0) {
            res.status(400).json({ message: 'Characters don\'t exist' })
        }

        res.status(200).send(characters)
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}

module.exports = {
    getCharacters: characters
}