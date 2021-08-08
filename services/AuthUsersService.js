const db = require('../models');
const { randomString } = require('../utils/randomString');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/smart_erp_config');

exports.getAll = async () => {
    try{
        const result = await db.AuthUsers.findAll({
            include:[
                {
                    model: db.MasterClients,
                    as: "masterclients"
                },
                {
                    model: db.MasterBranches,
                    as: "masterbranches"
                },
            ],
            orderBy: [["UserName","ASC"]]
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByPk = async (id) => {
    try{
        const result = await db.AuthUsers.findByPk(id);

        return result;
    }
    catch(e) {
        throw e;
    }
}

exports.getByStatus = async (status) => {
    try{
        const result = db.AuthUsers.findAll({
            where: {IsActive: status}
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.getByUserName = async (userName) => {
    try{
        const result = db.AuthUsers.findOne({            
            where: {UserName: userName}
        })

        return result;
    }
    catch(e){
        throw e;
    }
}

exports.resetPassword = async (id, data) => {
    //console.log('id ==>', id)
    try{
        /*get random string for password*/
        const randomPassword = randomString();
        //console.log('randomPassword==>', randomPassword)

        const salt = await bcrypt.genSalt();
        const newPassword = await bcrypt.hash(randomPassword, salt);

        //console.log('newPassword ==>', newPassword)

        const result = await db.AuthUsers.update({UserPassword: newPassword, PasswordDefault: newPassword}, {
            where:  {UserId: id}
        })

        return result;
    }
    catch(e){
        throw e
    }
}

exports.signIn = async (userName, userPassword) => {
    try {
        /*get valid UserName*/
        const authUsers = await this.getByUserName(userName.toLowerCase());
        //console.log('authUsers==>', authUsers)

        /*if UserName exist*/
        if (authUsers) {

            /*create payload for token*/
            const payload = {
                UserId: authUsers.UserId,
                UserName: authUsers.UserName
            };
            //console.log('payload ==>', payload)

            /*create token*/
            const token = await createToken(payload);
            //console.log('token ==>', token)

            /*compare password between DB and login form*/
            const auth = await bcrypt.compare(userPassword, authUsers.UserPassword)
            //console.log('auth ==>', auth)

            /*if invalid credential*/
            if (!auth){
                return {
                    status: false,
                    message: 'Invalid Credential'
                }
            } else {
                /*if user inactive*/
                if (authUsers.IsActive==0){
                    return {
                        status: false,
                        message: 'User Is No Longer Active'
                    }
                }

                if (authUsers.IsLock==1){
                    return {
                        status: false,
                        message: 'User Is Locked'
                    }
                }

                /*if login success*/
                await this.update(authUsers.UserId, {LastLogin: new Date(), IsLogged: 1})

                return {
                    status: true,
                    message: 'Login Success',
                    token: `Bearer ${token}`,
                    user: serializeUser(authUsers)
                }
            }

        }

    }
    catch(e){
        throw e;
    }
}

exports.signOut = async (userName) => {
    try {

        const authUsers = await this.getByUserName(userName.toLowerCase());
        await this.update(authUsers.UserId, {LastLogout: new Date(), IsLogged: 0})

        return {
            status: true,
            message: 'SignOut Success',
        }
    }
    catch(e){
        throw e
    }
}

const serializeUser = (user) => {
    return{
        UserId: user.UserId,
        ClientId: user.ClientId,
        BranchId: user.BranchId,
        UserName: user.UserName,
        Email: user.Email
    }
}

const maxAge = 15 * 60000;
const createToken = async (payload) => {
    return jwt.sign({payload}, config.secret, {
        expiresIn: maxAge
    })
}

exports.create = async (data) =>{
    try{
        const result = await db.AuthUsers.create(data);

        return result;  
    }
    catch(e){
        throw e;
    }
}

exports.update = async (id, data) => {
    try{
        const result = await db.AuthUsers.update(data, {
            where: { UserId:id}
        })
        
        return result;
    }
    catch(e){
        throw e
    }
}

exports.delete = async (id) => {
    try{
        const result = await db.AuthUsers.destroy({
            where: {UserId: id}
        });

        return result;   
    }
    catch(e){
        throw e
    }
}

