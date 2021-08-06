const masterPatientsService = require('../services/MasterPatientsService');

exports.getAll = (req, res) => {
    masterPatientsService.getAll()
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByPk = (req, res) => {
    masterPatientsService.getByPk(req.params.id)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByStatus = (req, res) => {
    masterPatientsService.getByStatus(req.params.status)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err);
    })
}

exports.create = (req, res) => {
    masterPatientsService.create(req.body)
    .then(result => {
        res.status(200).send({message: "Record Has Been Added", status: true})
    })
    .catch(err => {
        console.log(err.message);
    })   
}

exports.update = (req, res) => {

    const id = req.params.id;

    masterPatientsService.update(id, req.body)
    .then((result) => {      

        if (result == 1){
            res.status(200).send({message:"Data Has Been Updated", status:true})
        }
        else{
            res.status(400).send({message:"Data Has NOT Been Updated", status:false})
        }
        
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    masterPatientsService.delete(id)
    .then(result => {

        if (result == 1){            
            res.status(200).send({message:"Data Has Been Removed", status: true})
        }
        else{
            res.status(400).send({message:"Data Has NOT Been Removed", status: false})
        }
        
    })
    .catch(err => {
        console.log(err.message);
    })
}