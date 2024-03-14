import { Sequelize } from "sequelize";


const db = new Sequelize('node', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    // lodding: false,

});

export default db;