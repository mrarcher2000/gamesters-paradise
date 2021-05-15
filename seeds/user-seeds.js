const sequelize = require('../config/connection').Router();
const { User, Post } = require('../models');

// template for a user's data. Please cringe at the horrible name I made
const userdata = [
    {
        username: 'epicgamer420',
        email: 'gitgud@scrub.net',
        password: 'getrekt!'
    },
    {
        username: '360noscoper',
        email: 'boom@headshot.com',
        password: 'iamthebest'
    },
    {
        username: 'Xxcooldude2007xX',
        email: 'real@gamer.net',
        password: 'thelegend'
    },
    {
        username: '1337h4xx0r',
        email: 'codemanipulator@gmail.com',
        password: 'cantwinlegit'
    },
    {
        username: 'RPGaddict',
        email: 'cloud@strife.com',
        password: 'notinterested'
    },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
