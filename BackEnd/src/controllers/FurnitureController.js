const User = require('../models/User')
const Furniture = require('../models/Furniture')


module.exports = {
    async index(req, res) {
        try {
            const listFurniture = await Furniture.find()
    
            return res.json(listFurniture)
        } catch (error) {
            return res.status(500).json({ error, msg: 'Erro ao buscar os Móveis'})
        }
    },

    async indexPopulateUser(req, res) {
        try {
            const showFurniteWithUser = await Furniture.findOne({_id: req.params.id}).populate('userId')
            
            return res.json(showFurniteWithUser)
        } catch (error) {
            return res.status(500).json({ error, msg: 'Erro ao buscar o Móvel'})
        }
    },

    async create(req, res) {
        const { userId, name, description, daysWeek, dateStart, dateFinal, timeStart, timeFinal, pathImgs } = req.body

        if(userId){
            try {
                const address = { zipCode, number, street, neighborhood, city, state } = req.body

                const newFurniture = await Furniture.create({ userId, name, description, daysWeek, 
                    dateStart, dateFinal, timeStart, timeFinal, pathImgs, address })

                return res.json(newFurniture)
            } catch (error) {
                return res.status(500).json({ error, msg: 'Erro ao cadastrar o Móvel'})
            }
        }

        return res.status(400).json({ error, msg: 'Erro o id de Usuário não existe'})
    },

    async update(req, res) {
        const idFurniture = req.params.id

        if(idFurniture){
            try {
                const { name, description, daysWeek, dateStart, dateFinal, timeStart, timeFinal, pathImgs } = req.body
                
                const address = { zipCode, number, street, neighborhood, city, state } = req.body

                const updatedFurniture = await Furniture.findOneAndUpdate({ _id: idFurniture}, {name, description,
                    daysWeek, dateStart, dateFinal, timeStart, timeFinal, pathImgs, address}, { new: true })

                return res.json(updatedFurniture)
            } catch (error) {
                return res.status(500).json({ error, msg: 'Erro ao atualizar o Móvel'})
            }
        }

        return res.status(500).json({ error, msg: 'Erro o id do Móvel não existe'})
    },

    async destroy(req, res) {
        try {
            await Furniture.findOneAndDelete({ _id: req.params.id })
            return res.json()
        } catch (error) {
            return res.status(404).json({ error, msg: 'Erro ao excluir o Móvel'})
        }
    },
}