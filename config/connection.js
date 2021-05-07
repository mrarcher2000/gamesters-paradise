const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = process.env.JAWSDB_UR
    ? new Sequelize(procees.env,JAWSDB_URL)
    : new Sequelize(process.env.JAWSDB_UR, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306

    });

module.exports = sequelize;