module.exports = (sequelize, DataTypes) => {
    const MasterDoctorsSchedule = sequelize.define(
        "MasterDoctorsSchedule",
        {
            ScheduleId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "schedule_id",
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
            Days: {
                type: DataTypes.STRING(20),                
                allowNull: false,                
                field: "days",                
                validate: {
                    notEmpty: true
                }
            },            
            StartTime: {
                type: DataTypes.STRING(20),
                allowNull: false,                
                field: "start_time",                              
                validate: {
                    notEmpty: true
                }
            },
            EndTime: {
                type: DataTypes.STRING(20),
                allowNull: false,                
                field: "end_time",                              
                validate: {
                    notEmpty: true
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
            tableName: "master_doctors_schedule",
        }
    );

    MasterDoctorsSchedule.associate = function(models) {
        MasterDoctorsSchedule.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
        })
        MasterDoctorsSchedule.belongsTo(models.MasterBranches, {
            foreignKey: 'BranchId',
            as: "masterbranches",
        })

    }

    return MasterDoctorsSchedule;
}