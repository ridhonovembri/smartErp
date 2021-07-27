module.exports = (sequelize, DataTypes) => {
    const MasterDokters = sequelize.define(
        "MasterDokters",
        {
            IdDokter: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "iddokter",
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
            Nip: {
                type: DataTypes.STRING(50),                
                allowNull: false,
                unique: true,
                field: "nip",                
                validate: {
                    notEmpty: true
                }
            },
            NamaDokter: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                field: "namadokter",                
                validate: {
                    notEmpty: true
                }
            },
            TempatLahir: {
                type: DataTypes.STRING(100),
                allowNull: false,                
                field: "tempat_lahir",                
                validate: {
                    notEmpty: true
                }
            },
            TanggalLahir: {
                type: DataTypes.DATE,
                allowNull: false,                
                field: "tanggal_lahir",                
                validate: {
                    notEmpty: true
                }
            },
            Alamat: {
                type: DataTypes.STRING(200),
                allowNull: true,                
                field: "alamat",                
                validate: {
                    notEmpty: false
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
            Agama: {
                type: DataTypes.STRING(50),
                allowNull: false,                
                field: "agama",                
                validate: {
                    notEmpty: true
                }
            },
            Spesialis: {
                type: DataTypes.STRING(50),
                allowNull: false,                
                field: "spesialis",                
                validate: {
                    notEmpty: true
                }
            },
            PengalamanDari: {
                type: DataTypes.DATE,
                allowNull: false,                
                field: "pengalaman_dari",                
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
            tableName: "master_dokters",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'update_at'
        }
    );

    MasterDokters.associate = function(models) {
        MasterDokters.belongsTo(models.MasterClients, {
            foreignKey: 'IdClient',
            as: "masterclients",
        })
    }

    return MasterDokters;
}