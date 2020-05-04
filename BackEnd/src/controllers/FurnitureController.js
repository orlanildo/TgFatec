const User = require('../models/User')
const Address = require('../models/Address')
const Furniture = require('../models/Furniture')


module.exports = {
    async index(req, res) {
        const listFurniture = await Furniture.find()
        console.log('index: ', listFurniture)
        return res.send(listFurniture)
    },

    async indexPopulateAddress(req, res) {
        const getFurnitureWithAddress = Furniture.findOne().populate('Address').populate('User')
        console.log('indexPopulateAddress: ', getFurnitureWithAddress)
        return res.send()
    },

    async create(req, res) {
        const userId =  req.body.userId
        const userIdExist = await User.findOne({ _id: userId })

        if(userIdExist){
            console.log('\nuserId: ', userId)

            console.log('\nuserIdExist typeof: ',typeof(userIdExist))

            console.log('\n', typeof(userIdExist.location.coordinates[0]))

            console.log('\nuserIdExist: ', userIdExist)

            //const newFurniture = await Furniture.create(req.body)
            return res.send()
        }

    },

    async update(req, res) {
        console.log('update: ', req.body)
        return res.send()
    },

    async destroy(req, res) {
        try {
            await Furniture.findOneAndDelete(req.params.id)
            return res.send()
        } catch (error) {
            return res.status(404).json({ error, msg: 'Erro ao excluir o Movél'})
        }
    },
}