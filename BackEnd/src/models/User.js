const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    cellPhone: { type: String, required: true },
    location: { type:  PointSchema, index: '2dsphere' },

    addressId: String,
    furnitureId: [],
})

module.exports = mongoose.model('User', UserSchema)