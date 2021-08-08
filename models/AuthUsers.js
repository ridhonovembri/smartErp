module.exports = (sequelize, DataTypes) => {
    const AuthUsers = sequelize.define(
        "AuthUsers",
        {
            UserId: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                allowNull: false,
                field: "user_id",
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
            UserName: {
                type: DataTypes.STRING(100),                
                allowNull: false,
                unique: true,
                field: "user_name",                
                validate: {
                    notEmpty: true
                }
            },
            UserPassword: {
                type: DataTypes.TEXT,                
                allowNull: true,
                unique: true,
                field: "user_password",                
                validate: {
                    notEmpty: false
                }
            },
            PasswordDefault: {
                type: DataTypes.TEXT,                
                allowNull: true,
                field: "password_default",                
                validate: {
                    notEmpty: false
                }
            },     
            Email: {
                type: DataTypes.STRING(100),                
                allowNull: true,
                field: "email",                
                validate: {
                    notEmpty: false
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
            IsLock: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: "is_lock",
                defaultValue: 0,                     
                validate: {
                    notEmpty: true
                }
            },
            LastLogin: {
                type: DataTypes.DATE,
                allowNull: true,
                field: "last_login",                
                validate: {
                    notEmpty: false
                }
            },
            LastLogout: {
                type: DataTypes.DATE,
                allowNull: true,
                field: "last_logout",                                  
                validate: {
                    notEmpty: false
                }
            },
            IsLogged: {
                type: DataTypes.INTEGER,
                allowNull: true,
                field: "is_logged",                                  
                validate: {
                    notEmpty: false
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
            tableName: "auth_users",
        }
    );

    AuthUsers.associate = function(models) {
        AuthUsers.belongsTo(models.MasterClients, {
            foreignKey: 'ClientId',
            as: "masterclients",
            onDelete: 'RESTRICT'
        })

        AuthUsers.belongsTo(models.MasterBranches, {
            foreignKey: 'BranchId',
            as: "masterbranches",
            onDelete: 'RESTRICT'
        })
    }

    return AuthUsers;
}