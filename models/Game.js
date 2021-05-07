const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {
    static reviewGame(body, models) {
        return models.Review.create({
           rating: body.rating,
           review_text: body.review_text,
           user_id: body.user_id,
           game_id: body.game_id 
        }).then(() => {
            return Game.findOne({
                where: {
                    id: body.game_id
                },
                attributes: [
                    'id',
                    'game_name',
                    'developer',
                    'platforms',
                    'release_year',
                    'created_at',
                    [models.sequelize.fn('AVG', models.sequelize.col('rating')), 'game_rating']
                ],
                include: [{
                    model: models.User,
                    attributes: ['username']
                }]
            });
        });
    }
}

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