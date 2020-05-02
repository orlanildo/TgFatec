const { Router } = require('express')
const UserController = require('./controllers/UserController')
const SearchController = require('./controllers/SearchController')
const Address = require('./controllers/AddressController')

const routes = Router()

routes
    .get('/search', SearchController.index)

    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.destroy)

    .get('/address', Address.index)
    .post('/address', Address.create)
    .put('/address/:id', Address.update)
    .delete('/address/:id', Address.destroy)


module.exports = routes