const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.MasterDoctorsSchedule.findAll({
            orderBy: [["DoctorId","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.MasterDoctorsSchedule.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.MasterDoctorsSchedule.findAll({
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
        const result = await db.MasterDoctorsSchedule.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.MasterDoctorsSchedule.update(data, {
            where: { ScheduleId:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.MasterDoctorsSchedule.destroy({
            where: {ScheduleId: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

