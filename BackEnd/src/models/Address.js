const mongoose = require('mongoose')


const AddressSchema = new mongoose.Schema({
    user: { 
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    },
    number: Number,
    street: String,
    neighborhood: String,
    city: String,
    state: String
})

module.exports = mongoose.model('Address', AddressSchema)
