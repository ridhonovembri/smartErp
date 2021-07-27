const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterDokters.findAll({
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
        const result = await db.MasterDokters.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.MasterDokters.findAll({
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
        const result = await db.MasterDokters.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterDokters.update(data, {
            where: { IdDokter:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterDokters.destroy({
            where: {IdDokter: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

