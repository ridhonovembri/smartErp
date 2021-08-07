const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterBranches.findAll({
            include: {
                model: db.MasterClients,
                as: "masterclients"
            },
            orderBy: [["BranchName","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.MasterBranches.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByClient = async (id) => {
    try{
        const result = db.MasterBranches.findAll({
            where: { ClientId: id}
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.MasterBranches.findAll({
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
        const result = await db.MasterBranches.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterBranches.update(data, {
            where: { BranchId:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterBranches.destroy({
            where: {BranchId: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

