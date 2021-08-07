const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterDoctorsPolis.findAll({
            include: [ 
                {
                    model: db.MasterClients,
                    as: "masterclients"
                },
                {
                    model: db.MasterBranches,
                    as: "masterbranches"
                },
                {
                    model: db.MasterDoctors,
                    as: "masterdoctors"
                },
                {
                    model: db.MasterPolis,
                    as: "masterpolis"
                }
            ],
            orderBy: [["DocterId","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.MasterDoctorsPolis.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.MasterDoctorsPolis.findAll({
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
        const result = await db.MasterDoctorsPolis.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterDoctorsPolis.update(data, {
            where: { DoctorsPolisId:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterDoctorsPolis.destroy({
            where: {DoctorsPolisId: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

