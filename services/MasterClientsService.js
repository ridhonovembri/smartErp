const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterClients.findAll({
            orderBy: [["ClientName","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.MasterClients.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByUrl = async (url) => {
    try{
        const result = db.MasterClients.findOne({
            where: { url: url}
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.MasterClients.findAll({
            where: {IsActive: status}
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.create = async (data) =>{
    try{
        const result = await db.MasterClients.create(data);

        //console.log("create ==>", result)
        //console.log("create ==> ", result.dataValues.NamaClient);
        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterClients.update(data, {
            where: { ClientId:id}
        })

        //console.log("update ==> ", result);
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterClients.destroy({
            where: {ClientId: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

