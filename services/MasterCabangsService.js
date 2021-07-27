const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterCabangs.findAll({
            orderBy: [["NamaCabang","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.MasterCabangs.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByIdClient = async (id) => {
    try{
        const result = db.MasterCabangs.findAll({
            where: { IdClient: id}
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.MasterCabangs.findAll({
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
        const result = await db.MasterCabangs.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterCabangs.update(data, {
            where: { IdCabang:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterCabangs.destroy({
            where: {IdCabang: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

