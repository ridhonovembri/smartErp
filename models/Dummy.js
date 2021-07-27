const uuid = require('uuid')

module.exports = (sequelize, DataTypes) => {
    const Dummy = sequelize.define(
        "Dummy",
        {
            Id: {
                type: DataTypes.UUID,                
                primaryKey: true,
                allowNull: false,
                field: "id",                
                defaultValue: require("sequelize").UUIDV1,
                //autoIncrement: true,
                validate: {
                    notEmpty: true
                }
            },
            Desc: {
                type: DataTypes.STRING(50),                
                allowNull: true,
                field: "desc",                
                validate: {
                    notEmpty: false
                }
            },            
        },
        {
            freezeTableName: true,
            timestamps: false,
            tableName: "dummy",            
        }
    );

    // Dummy.beforeCreate((dummy, _ ) => {
    //     return dummy.id = uuid();
    // });
     

    return Dummy;
}