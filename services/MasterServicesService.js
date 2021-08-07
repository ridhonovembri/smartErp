const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterServices.findAll({
            orderBy: [["ServiceName","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.MasterServices.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.MasterServices.findAll({
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
        const result = await db.MasterServices.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterServices.update(data, {
            where: { ServiceId:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterServices.destroy({
            where: {ServiceId: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

