const authUsersService = require('../services/AuthUsersService');

exports.getAll = (req, res) => {
    authUsersService.getAll()
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByPk = (req, res) => {
    authUsersService.getByPk(req.params.id)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err.message);
    })
}

exports.getByStatus = (req, res) => {
    authUsersService.getByStatus(req.params.status)
    .then(result => {
        res.status(200).send(JSON.stringify(result));
    })
    .catch(err => {
        console.log(err);
    })
}

exports.resetPassword = (req, res) => {
    const id = req.params.id;

    authUsersService
        .resetPassword(id, req.body)
        .then((num) => {
            if (num == 1) {
                res.status(200).send({status: true, message: "Password Has been Reset Successfully"})
            }
        })
        .catch(err => {
            console.log(err.message);
        })
}

exports.signIn = (req, res) => {
    const {UserName, UserPassword} = req.body;

    // console.log('UserName==>', UserName)
    // console.log('UserPassword==>', UserPassword)

    authUsersService
        .signIn(UserName, UserPassword)
        .then(result => {
            //console.log('result==>', result)
            res.status(200).send({
                message: result.message, 
                status: result.status, 
                token: result.token, 
                user: result.user
            })
        })
        .catch(err => {
            console.log(err.message)
        })
}

exports.signOut = (req, res) => {
    const { UserName} = req.body;

    authUsersService
        .signOut(UserName)
        .then(result => {            
            res.status(200).send({
                message: result.message, 
                status: result.status                
            })
        })
        .catch(err => {
            console.log(err.message)
        })

}

exports.create = (req, res) => {
    authUsersService.create(req.body)
    .then(result => {
        res.status(200).send({message: "Record Has Been Added", status: true})
    })
    .catch(err => {
        console.log(err.message);
    })   
}

exports.update = (req, res) => {

    const id = req.params.id;

    authUsersService.update(id, req.body)
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

    authUsersService.delete(id)
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