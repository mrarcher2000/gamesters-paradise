const sequelize = require('../config/connection').Router();
const { User, Post } = require('../../models');

// template for a user's data. Please cringe at the horrible name I made
const userdata = [
    {
        username: 'epicgamer420',
        email: 'gitgud@scrub.net',
        password: 'getrekt!'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;