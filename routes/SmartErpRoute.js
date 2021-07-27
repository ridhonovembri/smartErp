const express = require('express');
const route = express.Router();

const masterClientsController = require('../controllers/MasterClientsController');
const masterCabangsController = require('../controllers/MasterCabangsController');
const dummyController = require('../controllers/DummyController');

/* MasterClients*/
route.get('/api/masterclients/getAll', masterClientsController.getAll)
route.get('/api/masterclients/getByPk/:id', masterClientsController.getByPk)
route.get('/api/masterclients/getByUrl/:url', masterClientsController.getByUrl)
route.get('/api/masterclients/getByStatus/:status', masterClientsController.getByStatus)
route.post('/api/masterclients/post', masterClientsController.create)
route.put('/api/masterclients/update/:id', masterClientsController.update);
route.delete('/api/masterclients/delete/:id', masterClientsController.delete);
// route.get('/api/masterclients/getMultipleValues/:val1/:val2/:val3/:val4', masterClientsController.getMultipleValues)
// route.get('/api/masterclients/getQueryString', masterClientsController.getQueryString)
/*---------------*/

/*MasterCabangs*/
route.get('/api/masterCabangs/getAll', masterCabangsController.getAll)
route.get('/api/masterCabangs/getByPk/:id', masterCabangsController.getByPk)
route.get('/api/masterCabangs/getByIdClient/:id', masterCabangsController.getByIdClient)
route.get('/api/masterCabangs/getByStatus/:status', masterCabangsController.getByStatus)
route.post('/api/masterCabangs/post', masterCabangsController.create)
route.put('/api/masterCabangs/update/:id', masterCabangsController.update);
route.delete('/api/masterCabangs/delete/:id', masterCabangsController.delete);
/*---------------*/

route.get('/api/Dummy/getAll', dummyController.getAll)
route.post('/api/Dummy/post', dummyController.create)
route.put('/api/Dummy/update/:id', dummyController.update);
route.delete('/api/Dummy/delete/:id', dummyController.delete);

module.exports = route;