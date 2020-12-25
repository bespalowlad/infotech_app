const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CharacterSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    avatar: {
        src: String
    },
    full_img: {
        src: String
    }
})

const CharacterModel = mongoose.model('character', CharacterSchema)

module.exports = CharacterModel