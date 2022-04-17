import Sequelize, {DataTypes} from 'sequelize';

import {db} from '../db';

export const UserModel = db.define("usuarios", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id',
    },
    usuario:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'usuario'
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'senha'
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'status'
    }
});