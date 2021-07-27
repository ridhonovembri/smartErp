const db = require('../models');

exports.getAll = async () => {
    try{
        const result = await db.Dummy.findAll({
            orderBy: [["Desc","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;

    }
}

exports.create = async (data) =>{
    try{
        const result = await db.Dummy.create(data);
        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.Dummy.update(data, {
            where: { Id:id}
        })
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.Dummy.destroy({
            where: {Id: id}
        });
        return result;   
    }
    catch(e){
        throw e
    }
}

