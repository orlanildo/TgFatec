const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const user = await User.find()

        return res.json(user)
    },

    async indexFindOne(req, res){
        //5eac988c766f4e3488516762
        const test = await User.findOne({ _id: '5eae3c57dcf8df1d88a777b1' }).populate('Address')
        
        console.log(test)

        return res.send()
    },

    async create(req, res) {
        const { name, email, latitude, longitude, cellPhone, address } = req.body

        //let user = await User.findOne({ email })

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }

        let user = await User.create({
            name,
            email,
            cellPhone,
            address,
            location,
        })

        return res.send(user)
    },

    async update(req, res) {
        const { name, email, cellPhone, address } = req.body 
        const user = await User.findByIdAndUpdate(req.params.id, {
            name,
            email,
            cellPhone,
            address
        })

        return res.send(user)
    },

    async destroy(req, res) {
        await User.findByIdAndDelete(req.params.id)

        return res.send()
    }
}