module.exports = (sequelize, DataTypes) => {
    const MasterPolis = sequelize.define(
        "MasterPolis",
        {
            PoliId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "poli_id",
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
            PoliName: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                unique: true,
                field: "poli_name",                
                validate: {
                    notEmpty: true
                }
            },            
            IsPublish: {
                type: DataTypes.INTEGER,
                allowNull: true,                
                field: "is_publish",   
                defaultValue: 1,             
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
            tableName: "master_polis",
        }
    );

    MasterPolis.associate = function(models) {
        MasterPolis.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
        })
        MasterPolis.belongsTo(models.MasterBranches, {
            foreignKey: 'BranchId',
            as: "masterbranches",
        })

    }

    return MasterPolis;
}