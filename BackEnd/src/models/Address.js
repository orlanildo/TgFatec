const mongoose = require('mongoose')


const AddressSchema = new mongoose.Schema({
    number: Number,
    street: String,
    neighborhood: String,
    city: String,
    state: String,
    
    userId: String,
    furnitureId: String,
})

module.exports = mongoose.model('Address', AddressSchema)
