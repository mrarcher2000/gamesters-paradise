const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const CryptoJS = require('crypto-js');
const { beforeCreate, beforeUpdate } = require('./Post');

class User extends Model {
    checkPassword(loginPW) {
        var bytes = CryptoJS.AES.decrypt(loginPW, 'AMSS');
        if (this.password == bytes) {
            return true;
        }
    }
}

User.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await CryptoJS.AES.encrypt(newUserData.password, 'AMSS');
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await CryptoJS.AES.encrypt(updatedUserData, 'AMSS');
                return updatedUserData;
            }
        } 
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;