const mongoose = require('mongoose')


const FurnitureSchema = new mongoose.Schema({
    pathImgs: [String],
    name: String,
    description: String,
    dateWeek: [Number],
    dateStart: String,
    dateFinal: String,
    timeStart: String,
    timeFinal: String,

    userId: { type: String, required: true },
})

module.exports = mongoose.model('Furniture', FurnitureSchema)