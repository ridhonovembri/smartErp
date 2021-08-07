module.exports = (sequelize, DataTypes) => {
    const MasterDoctorsPolis = sequelize.define(
        "MasterDoctorsPolis",
        {
            DoctorsPolisId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "doctors_polis_id",
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
            DoctorId: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "doctor_id",
                references:  {
                    model: 'masterdoctors',
                    key: 'doctorid'
                },
                validate: {
                    notEmpty: true
                }
            },
            PoliId: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "poli_id",
                references:  {
                    model: 'masterpolis',
                    key: 'poliid'
                },
                validate: {
                    notEmpty: true
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
            tableName: "master_doctors_polis",
        }
    );

    MasterDoctorsPolis.associate = function(models) {
        MasterDoctorsPolis.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
        })

        MasterDoctorsPolis.belongsTo(models.MasterBranches, {
            foreignKey: 'BranchId',
            as: "masterbranches",
        })

        MasterDoctorsPolis.belongsTo(models.MasterDoctors, {
            foreignKey: 'DoctorId',
            as: "masterdoctors",
        })

        MasterDoctorsPolis.belongsTo(models.MasterPolis, {
            foreignKey: 'PoliId',
            as: "masterpolis",
        })
    }

    return MasterDoctorsPolis;
}