const mongoose = require('mongoose')
const crypto = require('crypto')
const PointSchema = require('./utils/PointSchema')
const AddressSchema = require('./utils/AddressSchema')


const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    cellPhone: { type: String, required: true },
    password: { type: String, required: true, select: false, 
        set: value => crypto.createHash('md5').update(value).digest('hex ') },
    
    location: { type:  PointSchema, index: '2dsphere' },
    address: [{ type: AddressSchema }],

    }, {
    timestamps: true,
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
})

module.exports = mongoose.model('User', UserSchema)





