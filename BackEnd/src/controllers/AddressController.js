const Address = require('../models/Address')
const User = require('../models/User')


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
        const userId = req.body.user

        if(userId){
            const listAdresses = await Address.find()
            const listIdsUserInAddress = listAdresses.map(idUser => idUser.user.toString())
            
            if(listIdsUserInAddress.includes(userId)){
                return res.status(404).json({ msg: 'Já existe um endereço para esse usuário' })
            }else{
                const address = await Address.create(req.body)
                return res.send(address)
            }
        }
    },

    async update(req, res) {
        //const updatedAddress = await Address.findOneAndUpdate(addressId, req.body)

        console.log('updatedAddress')
        
        return res.send()

    },

    async destroy(req, res) {
        console.log(req.body)

        return res.send()
    }
}