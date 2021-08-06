module.exports = (sequelize, DataTypes) => {
    const MasterPatients = sequelize.define(
        "MasterPatients",
        {
            PatientId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "patient_id",
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
            MedicalRecord: {
                type: DataTypes.STRING(50),                
                allowNull: false,
                unique: true,
                field: "medical_record",                
                validate: {
                    notEmpty: true
                }
            },
            IdentityType: {
                type: DataTypes.STRING(50),                
                allowNull: false,
                field: "identity_type",                
                validate: {
                    notEmpty: true
                }
            },
            IdentityNo: {
                type: DataTypes.STRING(50),                
                allowNull: false,
                field: "identity_no",                
                validate: {
                    notEmpty: true
                }
            },
            PatientName: {
                type: DataTypes.STRING(100),
                allowNull: false,                
                field: "patient_name",                
                validate: {
                    notEmpty: true
                }
            },
            Gender: {
                type: DataTypes.STRING(20),
                allowNull: false,                
                field: "gender",                
                validate: {
                    notEmpty: true
                }
            },
            PlaceOfBirth: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "place_of_birth",                
                validate: {
                    notEmpty: false
                }
            },
            DateOfBirth: {
                type: DataTypes.DATE,
                allowNull: true,                
                field: "date_of_birth",                
                validate: {
                    notEmpty: false
                }
            },
            PhoneNo: {
                type: DataTypes.STRING(20),
                allowNull: true,                
                field: "phone_no",                
                validate: {
                    notEmpty: false
                }
            },
            Email: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "email",                
                validate: {
                    notEmpty: false
                }
            },
            Nationality: {
                type: DataTypes.STRING(50),
                allowNull: false,                
                field: "nationality",                
                validate: {
                    notEmpty: true
                }
            },
            Religion: {
                type: DataTypes.STRING(20),
                allowNull: false,
                field: "religion",                                     
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
            }
        },
        {
            freezeTableName: true,
            tableName: "master_patients"
        }
    );

    MasterPatients.associate = function(models) {
        MasterPatients.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
            onDelete: 'RESTRICT'
        })

        MasterPatients.belongsTo(models.MasterBranches, {
            foreignKey: 'BranchId',
            as: "masterbranches",
            onDelete: 'RESTRICT'
        })
    }

    return MasterPatients;
}