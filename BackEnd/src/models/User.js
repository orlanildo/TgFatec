const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    cellPhone: { type: String, required: true },
    address: {
        type: mongoose.ObjectId,
        ref: 'Address'
    },
    location: {
        type:  PointSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('User', UserSchema)