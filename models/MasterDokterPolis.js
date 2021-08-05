module.exports = (sequelize, DataTypes) => {
    const MasterDokterPolis = sequelize.define(
        "MasterDokterPolis",
        {
            IdDokterPoli: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "iddokterpoli",
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
            IdDokter: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "iddokter",
                references:  {
                    model: 'masterdokters',
                    key: 'iddokter'
                },
                validate: {
                    notEmpty: true
                }
            },
            IdPoli: {
                type: DataTypes.INTEGER,    
                allowNull: false,
                field: "idpoli",
                references:  {
                    model: 'masterpolis',
                    key: 'idpoli'
                },
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
            tableName: "master_dokter_polis",
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'update_at'
        }
    );

    MasterDokterPolis.associate = function(models) {
        // MasterDoctors.belongsTo(models.MasterClients, {
        //     foreignKey: 'ClientId',
        //     as: "masterclients",
        // })

        // MasterDoctors.belongsTo(models.MasterBranches, {
        //     foreignKey: 'BranchId',
        //     as: "masterbranches",
        // })

        // MasterDokterPolis.belongsTo(models.MasterDokters, {
        //     foreignKey: 'IdDokter',
        //     as: "masterdokters",
        // })
        // MasterDokterPolis.belongsTo(models.MasterPolis, {
        //     foreignKey: 'IdPoli',
        //     as: "masterpolis",
        // })
    }

    return MasterDokterPolis;
}