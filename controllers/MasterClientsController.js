const masterClientsService = require('../services/MasterClientsService');

exports.getAll = (req, res) => {
    masterClientsService.getAll()
    .then(result => {
        //console.log(result)
        res.status(200).send(JSON.stringify(result));
    })
    .catch({

    })
}

exports.create = (req, res) => {
    masterClientsService.create(req.body)
    .then(result => {
        res.status(200).send({message: "Record Has Been Added", status: true})
    })
    .catch({

    })   
}

exports.update = (req, res) => {

    const id = req.params.id;

    masterClientsService.update(id, req.body)
    .then(result => {
        res.status(200).send({message:"Data Has Been Updated", status:true})
    })
    .catch({

    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    masterClientsService.delete(id)
    .then(result => {
        res.status(200).send({message:"Data Has Been Removed", status: true})
    })
}