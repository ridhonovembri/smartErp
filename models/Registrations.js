module.exports = (sequelize, DataTypes) => {
    const Registrations = sequelize.define(
        "Registrations",
        {
            RegId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "reg_id",
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
            PatientId: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "patient_id",
                references:  {
                    model: 'masterpatients',
                    key: 'patientid'
                },
                validate: {
                    notEmpty: true
                }
            },
            ServiceId: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "service_id",
                references:  {
                    model: 'masterservices',
                    key: 'serviceid'
                },
                validate: {
                    notEmpty: true
                }
            },
            DoctorsPolisId: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "doctors_polis_id",
                references:  {
                    model: 'masterdoctorspolis',
                    key: 'doctorspolisid'
                },
                validate: {
                    notEmpty: true
                }
            },            
            ScheduleId: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "schedule_id",
                references:  {
                    model: 'masterdoctorsschedule',
                    key: 'scheduleid'
                },
                validate: {
                    notEmpty: true
                }
            },
            RegNo: {
                type: DataTypes.STRING(50),
                allowNull: false,                
                field: "reg_no",                
                validate: {
                    notEmpty: true
                }
            },
            VisitDate: {
                type: DataTypes.DATE,
                allowNull: false,                
                field: "visit_date",                
                validate: {
                    notEmpty: true
                }
            },
            VisitTime: {
                type: DataTypes.TIME,
                allowNull: false,                
                field: "visit_time",                
                validate: {
                    notEmpty: true
                }
            },
            RegDate: {
                type: DataTypes.DATE,
                allowNull: false,                
                field: "reg_date",                
                validate: {
                    notEmpty: true
                }
            },
            Status: {
                type: DataTypes.STRING(20),
                allowNull: false,                
                field: "status",                
                validate: {
                    notEmpty: true
                }
            },
            PaymentMethod: {
                type: DataTypes.STRING(20),
                allowNull: false,                
                field: "payment_method",                
                validate: {
                    notEmpty: true
                }
            },
            PaymentStatus: {
                type: DataTypes.STRING(20),
                allowNull: false,                
                field: "payment_status",                
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
            tableName: "registrations",
        }
    );

    Registrations.associate = function(models) {
        Registrations.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
            onDelete: 'RESTRICT'
        })

        Registrations.belongsTo(models.MasterBranches, {
            foreignKey: 'BranchId',
            as: "masterbranches",
            onDelete: 'RESTRICT'
        })

        Registrations.belongsTo(models.MasterPatients, {
            foreignKey: 'PatientId',
            as: "masterpatients",
            onDelete: 'RESTRICT'
        })

        Registrations.belongsTo(models.MasterServices, {
            foreignKey: 'ServiceId',
            as: "masterservices",
            onDelete: 'RESTRICT'
        })

        Registrations.belongsTo(models.MasterDoctorsPolis, {
            foreignKey: 'DoctorsPolisId',
            as: "masterdoctorspolis",
            onDelete: 'RESTRICT'
        })

        Registrations.belongsTo(models.MasterDoctorsSchedule, {
            foreignKey: 'ScheduleId',
            as: "masterdoctorsschedule",
            onDelete: 'RESTRICT'
        })

    }

    return Registrations;
}