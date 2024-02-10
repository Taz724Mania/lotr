const mongoose = require('./connection')

const CharacterSchema = new mongoose.Schema({
    name: String,
    origin: String,
    image: String
})

const Characters = mongoose.model('Characters', CharacterSchema)

module.exports = Characters