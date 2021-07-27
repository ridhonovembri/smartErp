module.exports = (sequelize, DataTypes) => {
    const MasterPolis = sequelize.define(
        "MasterPolis",
        {
            IdPoli: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "idpoli",
                autoIncrement: true,
                validate: {
                    notEmpty: true
                }
            },
            IdClient: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "idclient",
                references:  {
                    model: 'masterclients',
                    key: 'idclient'
                },
                validate: {
                    notEmpty: true
                }
            },
            NamaPoli: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                unique: true,
                field: "namapoli",                
                validate: {
                    notEmpty: true
                }
            },            
            IsPublish: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "is_publish",   
                defaultValue: 1,             
                validate: {
                    notEmpty: false
                }
            },            
            IsActive: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "is_active",
                defaultValue: 1,                     
                validate: {
                    notEmpty: true
                }
            },
            CreatedBy: {
                type: DataTypes.STRING(50),                
                allowNull: true,
                field: "created_by",                
                validate: {
                    notEmpty: false
                }
            },
            UpdateBy: {
                type: DataTypes.STRING(50),                
                allowNull: true,
                field: "update_by",                
                validate: {
                    notEmpty: false
                }
            },
        },
        {
            freezeTableName: true,
            tableName: "master_polis",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'update_at'
        }
    );

    MasterPolis.associate = function(models) {
        MasterPolis.belongsTo(models.MasterClients, {
            foreignKey: 'IdClient',
            as: "masterclients",
        })
    }

    return MasterPolis;
}