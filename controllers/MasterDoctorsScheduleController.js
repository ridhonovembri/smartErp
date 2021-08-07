const masterDoctorsScheduleService = require('../services/MasterDoctorsScheduleService');

exports.getAll = (req, res) => {
    masterDoctorsScheduleService.getAll()
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByPk = (req, res) => {
    masterDoctorsScheduleService.getByPk(req.params.id)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByStatus = (req, res) => {
    masterDoctorsScheduleService.getByStatus(req.params.status)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err);
    })
}

exports.create = (req, res) => {
    masterDoctorsScheduleService.create(req.body)
    .then(result => {
        res.status(200).send({message: "Record Has Been Added", status: true})
    })
    .catch(err => {
        console.log(err.message);
    })   
}

exports.update = (req, res) => {

    const id = req.params.id;

    masterDoctorsScheduleService.update(id, req.body)
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

    masterDoctorsScheduleService.delete(id)
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