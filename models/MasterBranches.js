module.exports = (sequelize, DataTypes) => {
    const MasterBranches = sequelize.define(
        "MasterBranches",
        {
            BranchId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "branch_id",
                autoIncrement: true,
                validate: {
                    notEmpty: true
                }
            },
            ClientId: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "client_id",
                references:  {
                    model: 'masterclients',
                    key: 'clientid'
                },
                validate: {
                    notEmpty: true
                }
            },
            BranchName: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                unique: true,
                field: "branch_name",                
                validate: {
                    notEmpty: true
                }
            },
            Address: {
                type: DataTypes.STRING(500),                
                allowNull: false,
                field: "address",                
                validate: {
                    notEmpty: true
                }
            },
            PhoneNo1: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "phone_no_1",                
                validate: {
                    notEmpty: false
                }
            },
            PhoneNo2: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "phone_no_2",                
                validate: {
                    notEmpty: false
                }
            },
            OperationalHour: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "operational_hour",                
                validate: {
                    notEmpty: false
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
            Latitude: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "latitude",                
                validate: {
                    notEmpty: false
                }
            },
            Longitude: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "longitude",                
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
            tableName: "master_branches",            
        }
    );

    MasterBranches.associate = function(models) {
        MasterBranches.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
            onDelete: 'RESTRICT'
        })

        MasterBranches.hasMany(models.MasterDoctors, {
            foreignKey: "BranchId",            
            onDelete: 'RESTRICT'
        })     

        MasterBranches.hasMany(models.MasterPatients, {
            foreignKey: "BranchId",            
            onDelete: 'RESTRICT'
        }) 

    }

    return MasterBranches;
}