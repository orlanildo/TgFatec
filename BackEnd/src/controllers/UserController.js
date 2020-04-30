const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const user = await User.find()

        return res.status(200).json(user)
    },

    async create(req, res) {
        const { name, email, latitude, longitude } = req.body

        let user = await User.findOne({ email })

        if(!user){
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
    
            user = await User.create({
                name,
                email,
                location
            })
            return res.status(200).json(user)
        }else{
            return res.status(500).json({ msg: 'Usuario já existente!' })
        }

    },

    async update(req, res) {
        const { id, name, email } = req.body

        const user = await User.findOneAndUpdate(id, {
            name,
            email,
        })

        console.log(user)

        return res.status(200).json({ user })

    },

    async destroy(req, res) {

    }
}