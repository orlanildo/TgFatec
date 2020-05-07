const { Router } = require('express')
const UserController = require('./controllers/UserController')
const SearchController = require('./controllers/SearchController')
const FurnitureController = require('./controllers/FurnitureController')

const routes = Router()

routes
    .get('/search', SearchController.index)

    .get('/users', UserController.index)
    .get('/users/:id', UserController.indexFindOne)
    .post('/users', UserController.create)
    .put('/users/:id', UserController.update)
    .delete('/users/:id', UserController.destroy)

    // .get('/address', AddressController.index)
    // .get('/address/:id', AddressController.indexPopulateUser)
    // .post('/address', AddressController.create)
    // .put('/address/:id', AddressController.update)
    // .delete('/address/:id', AddressController.destroy)
    
    .get('/furniture', FurnitureController.index)
    .get('/furniture/:id', FurnitureController.indexPopulateUser)
    .post('/furniture', FurnitureController.create)
    .put('/furniture/:id', FurnitureController.update)
    .delete('/furniture/:id', FurnitureController.destroy)


module.exports = routes