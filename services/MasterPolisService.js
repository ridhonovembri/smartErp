const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterPolis.findAll({
            include:[
                {
                    model: db.MasterClients,
                    as: "masterclients"
                },
                {
                    model: db.MasterBranches,
                    as: "masterbranches"
                },
            ],
            orderBy: [["PolisName","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.MasterPolis.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.MasterPolis.findAll({
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
        const result = await db.MasterPolis.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterPolis.update(data, {
            where: { PoliId:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterPolis.destroy({
            where: {PoliId: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

