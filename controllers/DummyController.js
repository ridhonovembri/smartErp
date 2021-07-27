const dummyService = require('../services/DummyService');

exports.getAll = (req, res) => {
    dummyService.getAll()
    .then(result => {
        //console.log(result)
        res.status(200).send(JSON.stringify(result));
    })
    .catch({

    })
}

exports.create = (req, res) => {
    dummyService.create(req.body)
    .then(result => {
        res.status(200).send({message: "Record Has Been Added", status: true})
    })
    .catch({

    })   
}

exports.update = (req, res) => {

    const id = req.params.id;

    dummyService.update(id, req.body)
    .then(result => {
        res.status(200).send({message:"Data Has Been Updated", status:true})
    })
    .catch({

    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    dummyService.delete(id)
    .then(result => {
        res.status(200).send({message:"Data Has Been Removed", status: true})
    })
}