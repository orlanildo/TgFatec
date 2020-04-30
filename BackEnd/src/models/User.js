const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

// Ver a nova maneira de armazenar uma location no mongo
// e retirar esse useCreateIndex
mongoose.set('useCreateIndex', true);

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    location: {
        type:  PointSchema,
        index: '2dsphere'
    }
})

module.exports = mongoose.model('User', UserSchema)