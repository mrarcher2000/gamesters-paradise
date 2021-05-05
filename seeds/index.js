const seedUsers = require('./user-seeds');
//we will add more seed things as we create them. most likely post, likes, comments, etc.

const sequelize = require('..config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true});
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
};

seedAll();