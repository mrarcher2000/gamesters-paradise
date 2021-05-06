const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        game_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        release_year: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        platforms: {
           type: DataTypes.STRING,
           allowNull: true 
        },
        developer: {
            type:DataTypes.STRING,
            allowNull: true
        },
        sales: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'game'
    }
);

module.exports = Game;