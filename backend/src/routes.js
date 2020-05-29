const { Router } = require('express')

const ClientController = require('./controllers/ClientController')

const routes = Router()

routes.post('/clients', ClientController.create)
routes.get('/clients', ClientController.index)
routes.put('/clients/:id', ClientController.update)
routes.delete('/clients/:id', ClientController.delete)

module.exports = routes