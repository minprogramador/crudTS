import { Sequelize } from 'sequelize';

export const db = new Sequelize(
    'upbusca',
    'root',
    '',{
        dialect: 'mysql',
        host: 'localhost',
        port: 3306
    }  
);