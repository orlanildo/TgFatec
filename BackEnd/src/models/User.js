const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')
const AddressSchema = require('./utils/AddressSchema')


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    cellPhone: { type: String, required: true },
    password: { type: String, required: true },
    
    location: { type:  PointSchema, index: '2dsphere' },
    address: [{ type: AddressSchema }],
})

module.exports = mongoose.model('User', UserSchema)



