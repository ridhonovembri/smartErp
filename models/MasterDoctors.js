module.exports = (sequelize, DataTypes) => {
    const MasterDoctors = sequelize.define(
        "MasterDoctors",
        {
            DoctorId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "doctor_id",
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
            Nik: {
                type: DataTypes.STRING(50),                
                allowNull: false,
                unique: true,
                field: "nik",                
                validate: {
                    notEmpty: true
                }
            },
            Str: {
                type: DataTypes.STRING(50),                
                allowNull: false,
                unique: true,
                field: "str",                
                validate: {
                    notEmpty: true
                }
            },
            DoctorName: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                field: "doctor_name",                
                validate: {
                    notEmpty: true
                }
            },
            PlaceOfBirth: {
                type: DataTypes.STRING(100),
                allowNull: false,                
                field: "place_of_birth",                
                validate: {
                    notEmpty: true
                }
            },
            DateOfBirth: {
                type: DataTypes.DATE,
                allowNull: false,                
                field: "date_of_birth",                
                validate: {
                    notEmpty: true
                }
            },
            Address: {
                type: DataTypes.STRING(200),
                allowNull: true,                
                field: "address",                
                validate: {
                    notEmpty: false
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
            Religion: {
                type: DataTypes.STRING(50),
                allowNull: false,                
                field: "religion",                
                validate: {
                    notEmpty: true
                }
            },
            Specialis: {
                type: DataTypes.STRING(50),
                allowNull: false,                
                field: "specialis",                
                validate: {
                    notEmpty: true
                }
            },
            ExperienceDate: {
                type: DataTypes.DATE,
                allowNull: false,                
                field: "experience_date",                
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
            tableName: "master_doctors",
        }
    );

    MasterDoctors.associate = function(models) {
        MasterDoctors.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
            onDelete: 'RESTRICT'
        })

        MasterDoctors.belongsTo(models.MasterBranches, {
            foreignKey: 'BranchId',
            as: "masterbranches",
            onDelete: 'RESTRICT'
        })

        // MasterDoctors.hasMany(models.MasterDoctorsPolis, {
        //     foreignKey: 'DoctorId',
        //     as: "masterdoctors",
        // })
    }

    return MasterDoctors;
}