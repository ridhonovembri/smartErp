const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.Registrations.findAll({
            include:[
                {
                    model: db.MasterClients,
                    as: "masterclients"
                },
                {
                    model: db.MasterBranches,
                    as: "masterbranches"
                },
                {
                    model: db.MasterPatients,
                    as: "masterpatients"
                },
                {
                    model: db.MasterServices,
                    as: "masterservices"
                },
                {
                    model: db.MasterDoctorsPolis,
                    as: "masterdoctorspolis"
                },
                {
                    model: db.MasterDoctorsSchedule,
                    as: "masterdoctorsschedule"
                }
            ],
            orderBy: [["RegNo","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.Registrations.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.Registrations.findAll({
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
        const result = await db.Registrations.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.Registrations.update(data, {
            where: { RegId:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.Registrations.destroy({
            where: {RegId: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

