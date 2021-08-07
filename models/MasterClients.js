module.exports = (sequelize, DataTypes) => {
    const MasterClients = sequelize.define(
        "MasterClients",
        {
            ClientId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "client_id",
                autoIncrement: true,
                validate: {
                    notEmpty: true
                }
            },
            ClientName: {
                type: DataTypes.STRING(50),                
                allowNull: false,
                unique: true,
                field: "client_name",                
                validate: {
                    notEmpty: true
                }
            },
            Url: {
                type: DataTypes.STRING(50),
                allowNull: false,                
                field: "url",                
                validate: {
                    notEmpty: true
                }
            },
            Logo: {
                type: DataTypes.STRING(200),
                allowNull: true,
                field: "logo",                    
                validate: {
                    notEmpty: false
                }
            },
            Trash: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "trash",
                defaultValue: 0,                     
                validate: {
                    notEmpty: true
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
                field: "createdBy",                
                validate: {
                    notEmpty: false
                }
            },
            UpdatedBy: {
                type: DataTypes.STRING(50),                
                allowNull: true,
                field: "updatedBy",                
                validate: {
                    notEmpty: false
                }
            },
        },
        {
            freezeTableName: true,
            tableName: "master_clients",
            // timestamps: true,
            // createdAt: 'created_at',
            // updatedAt: 'updated_at'
        }
    );

    MasterClients.associate = function(models) {
        MasterClients.hasMany(models.MasterBranches, {
            foreignKey: "ClientId",
            as: "masterclients",
            onDelete: 'RESTRICT'
        })  

        MasterClients.hasMany(models.MasterDoctors, {
            foreignKey: "ClientId",
            onDelete: 'RESTRICT'
        })    
        
        MasterClients.hasMany(models.MasterPatients, {
            foreignKey: "ClientId",
            onDelete: 'RESTRICT'
        })   

        MasterClients.hasMany(models.MasterPolis, {
            foreignKey: "ClientId",
            onDelete: 'RESTRICT'
        })   

        MasterClients.hasMany(models.MasterServices, {
            foreignKey: "ClientId",
            onDelete: 'RESTRICT'
        })   
    }

    return MasterClients;
}