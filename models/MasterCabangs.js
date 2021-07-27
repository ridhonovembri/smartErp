module.exports = (sequelize, DataTypes) => {
    const MasterCabangs = sequelize.define(
        "MasterCabangs",
        {
            IdCabang: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "idcabang",
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
            NamaCabang: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                unique: true,
                field: "namacabang",                
                validate: {
                    notEmpty: true
                }
            },
            Alamat: {
                type: DataTypes.STRING(500),                
                allowNull: false,
                field: "alamat",                
                validate: {
                    notEmpty: true
                }
            },
            Telepon1: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "telepon_1",                
                validate: {
                    notEmpty: false
                }
            },
            Telepon2: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "telepon_2",                
                validate: {
                    notEmpty: false
                }
            },
            JamOperasional: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "jam_operasional",                
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
            tableName: "master_cabangs",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'update_at'
        }
    );

    MasterCabangs.associate = function(models) {
        MasterCabangs.belongsTo(models.MasterClients, {
            foreignKey: 'IdClient',
            as: "masterclients",
        })
    }

    return MasterCabangs;
}