const User = require('../models/User')

module.exports = {
    async index(req, res) {
        const findAllUsers = await User.find()

        return res.json(findAllUsers)
    },

    async indexFindOne(req, res){
        const findUser = await User.findOne({ _id: req.params.id }).populate('Furniture')
        
        return res.json(findUser)
    },

    async create(req, res) {
        const { name, email, cellPhone, password, latitude, longitude } = req.body

        const address = { zipCode, number, street, neighborhood, city, state } = req.body

        const location = { type: 'Point', coordinates: [longitude, latitude] }

        const newUser = await User.create({ name, email, cellPhone, password, location, address })

        return res.json(newUser)
    },

    async update(req, res) {
        const { name, email, cellPhone, password, latitude, longitude } = req.body

        const address = { zipCode, number, street, neighborhood, city, state } = req.body

        const location = { type: 'Point', coordinates: [longitude, latitude] }

        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            name, email, cellPhone, password, location, $push: { address } }, { new: true })

        return res.json(updateUser)
    },

    async destroy(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id)
            return res.send()
        } catch (error) {
            return res.status(404).json({ error, msg: 'Erro ao excluir um Usuário' })
        }
    }
}