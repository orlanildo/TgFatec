const User = require('../models/User')
const Address = require('../models/Address')
const Furniture = require('../models/Furniture')


module.exports = {
    async index(req, res) {
        const listAddress = await Address.find()

        return res.send(listAddress)
    },

    async indexPopulateUser(req, res) {
        const addressId = req.params.id

        const listAddress = await Address.findOne({ _id: addressId}).populate('user')

        console.log(listAddress)

        return res.send(listAddress)
    },

    async create(req, res) {
        const userId = req.body.userId
        const furnitureId = req.body.furnitureId

        if(userId){
            const userHaveAddress = await User.findOne({ _id: userId, addressId: null })
            
            if(userHaveAddress){
                const newAddress = await Address.create(req.body)

                await User.findByIdAndUpdate(userId, {addressId: newAddress._id}, { new: true })

                return res.send(newAddress)
            }
        }

        if(furnitureId){
            const furnitureHaveAddress = await Furniture.findOne({ _id: furnitureId, addressId: null})

            if(furnitureHaveAddress){
                const newAddress = await Address.create(req.body)

                const updateAddressInFurniture = await Furniture.findOneAndUpdate(furnitureId, {addressId: newAddress._id})
            
                console.log(updateAddressInFurniture)

                return res.send(newAddress)
            }
        }

        return res.status(400).send()
    },

    async update(req, res) {
        //const updatedAddress = await Address.findOneAndUpdate(addressId, req.body, { new: true })

        console.log('updatedAddress')
        
        return res.send()

    },

    async destroy(req, res) {
        try {
            await Address.findOneAndDelete(req.params.id)
            return res.json({ msg: 'Exclução feita com sucesso' })
        } catch (error) {
            return res.status(400).json({error, msg: 'Falha ao excluir o endereço' })
        }
    }
}