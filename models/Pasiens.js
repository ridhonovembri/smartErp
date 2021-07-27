module.exports = (sequelize, DataTypes) => {
    const Pasiens = sequelize.define(
        "Pasiens",
        {
            IdPasien: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "idpasien",
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
            IdCabang: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "idcabang",
                references:  {
                    model: 'mastercabangs',
                    key: 'idcabang'
                },
                validate: {
                    notEmpty: true
                }
            },
            Nik: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                unique: true,
                field: "nik",                
                validate: {
                    notEmpty: true
                }
            },
            Nama: {
                type: DataTypes.STRING(500),                
                allowNull: false,
                field: "nama",                
                validate: {
                    notEmpty: true
                }
            },
            JenisKelamin: {
                type: DataTypes.STRING(25),                
                allowNull: false,
                field: "jenis_kelamin",                
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
            NomorHp: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "nomor_hp",                
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
            Kewarganegaraan: {
                type: DataTypes.STRING(50),
                allowNull: true,                
                field: "kewarganegaraan",                
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
            IsActive: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "is_active",
                defaultValue: 1,                     
                validate: {
                    notEmpty: true
                }
            },
            NoRekamMedis: {
                type: DataTypes.STRING(100),
                allowNull: false,
                field: "no_rekam_medis",                                 
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
            tableName: "pasiens",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'update_at'
        }
    );

    Pasiens.associate = function(models) {
        Pasiens.belongsTo(models.MasterClients, {
            foreignKey: 'IdClient',
            as: "masterclients",
        })
        Pasiens.belongsTo(models.MasterCabangs, {
            foreignKey: 'IdCabang',
            as: "mastercabangs",
        })
    }

    return Pasiens;
}