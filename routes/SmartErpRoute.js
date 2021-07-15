const express = require('express');
const route = express.Router();
const masterClientsController = require('../controllers/MasterClientsController');

route.get('/api/masterclients/getAll', masterClientsController.getAll)
route.post('/api/masterclients/post', masterClientsController.create)
route.put('/api/masterclients/update/:id', masterClientsController.update);
route.delete('/api/masterclients/delete/:id', masterClientsController.delete);

module.exports = route;