module.exports = (sequelize, DataTypes) => {
    const MasterServices = sequelize.define(
        "MasterServices",
        {
            ServiceId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "service_id",
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
            BranchId: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "branch_id",
                references:  {
                    model: 'masterbranches',
                    key: 'branchid'
                },
                validate: {
                    notEmpty: true
                }
            },
            ServiceName: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                unique: true,
                field: "service_name",                
                validate: {
                    notEmpty: true
                }
            },            
            Description: {
                type: DataTypes.INTEGER,
                allowNull: true,                
                field: "description",                             
                validate: {
                    notEmpty: false
                }
            },
            Trash: {
                type: DataTypes.INTEGER,
                allowNull: true,                
                field: "trash",   
                defaultValue: 0,             
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
            tableName: "master_services",
        }
    );

    MasterServices.associate = function(models) {
        MasterServices.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
            onDelete: 'RESTRICT'
        })
        MasterServices.belongsTo(models.MasterBranches, {
            foreignKey: 'BranchId',
            as: "masterbranches",
            onDelete: 'RESTRICT'
        })

    }

    return MasterServices;
}