const mongoose = require('mongoose')
const AddressSchema = require('./utils/AddressSchema')


const FurnitureSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: AddressSchema, required: true },

    pathImgs: [{ type: String}],
    name: { type: String, required: true },
    daysWeek: [{ type: Number, required: true }],
    description: String,
    dateStart: String,
    dateFinal: String,
    timeStart: String,
    timeFinal: String
})

module.exports = mongoose.model('Furniture', FurnitureSchema)