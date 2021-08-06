const express = require('express');
const route = express.Router();

const masterClientsController = require('../controllers/MasterClientsController');
const masterBranchesController = require('../controllers/MasterBranchesController');
const masterDoctorsController = require('../controllers/MasterDoctorsController');
const masterPatientsController = require('../controllers/MasterPatientsController');
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
route.get('/api/masterBranches/getAll', masterBranchesController.getAll)
route.get('/api/masterBranches/getByPk/:id', masterBranchesController.getByPk)
route.get('/api/masterBranches/getByClient/:id', masterBranchesController.getByClient)
route.get('/api/masterBranches/getByStatus/:status', masterBranchesController.getByStatus)
route.post('/api/masterBranches/post', masterBranchesController.create)
route.put('/api/masterBranches/update/:id', masterBranchesController.update);
route.delete('/api/masterBranches/delete/:id', masterBranchesController.delete);
/*---------------*/

/*MasterDoctors*/
route.get('/api/masterDoctors/getAll', masterDoctorsController.getAll)
route.get('/api/masterDoctors/getByPk/:id', masterDoctorsController.getByPk)
route.get('/api/masterDoctors/getByStatus/:status', masterDoctorsController.getByStatus)
route.post('/api/masterDoctors/post', masterDoctorsController.create)
route.put('/api/masterDoctors/update/:id', masterDoctorsController.update);
route.delete('/api/masterDoctors/delete/:id', masterDoctorsController.delete);
/*---------------*/

/*MasterPatients*/
route.get('/api/masterPatients/getAll', masterPatientsController.getAll)
route.get('/api/masterPatients/getByPk/:id', masterPatientsController.getByPk)
route.get('/api/masterPatients/getByStatus/:status', masterPatientsController.getByStatus)
route.post('/api/masterPatients/post', masterPatientsController.create)
route.put('/api/masterPatients/update/:id', masterPatientsController.update);
route.delete('/api/masterPatients/delete/:id', masterPatientsController.delete);
/*---------------*/

route.get('/api/Dummy/getAll', dummyController.getAll)
route.post('/api/Dummy/post', dummyController.create)
route.put('/api/Dummy/update/:id', dummyController.update);
route.delete('/api/Dummy/delete/:id', dummyController.delete);

module.exports = route;