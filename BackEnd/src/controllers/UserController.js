const User = require('../models/User')
const jwt = require('../jwt')


module.exports = {

    async authMiddleWare(req, res, next) {
        const [, token] = req.headers.authorization.split(' ')
    
        try {
            const payload = await jwt.verify(token)
            const user = await User.findById(payload.user)

            if(!user) return res.send(401)

            next()
        } catch (error) {
            return res.send(error)
        }
    },

    async login(req, res) {
        const [, hash] = req.headers.authorization.split(' ')
        const [email, password] = Buffer.from(hash, 'base64').toString().split(':')

        try {
            const user = await User.findOne({ email, password })
            
            if(!user) return res.send(401)

            const token = await jwt.sign({ user: user.id })

            return res.send({ user, token })  
        } catch (error) {
            return res.send(error)
        }
    },

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

        try {
            const newUser = await User.create({ name, email, cellPhone, password, location, address })
            newUser.password = undefined
    
            const token = jwt.sign({ user: newUser._id })

            return res.send({ newUser, token })
        } catch (error) {
            return res.status(404).json({ error, msg: 'Erro não foi possivél cadastrar o Usuário' })
        }

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