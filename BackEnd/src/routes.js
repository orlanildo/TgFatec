const { Router } = require('express')
const UserController = require('./controllers/UserController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes
    .get('/search', SearchController.index)

    .get('/users', UserController.index)
    .post('/users', UserController.create)
    .put('/users', UserController.update)
    .delete('/users', UserController.destroy)


module.exports = routes