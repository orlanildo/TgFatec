const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
    zipCode: { type: String, required: true },
    number: { type: Number, required: true },
    street: { type: String, required: true },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
})

module.exports = AddressSchema
