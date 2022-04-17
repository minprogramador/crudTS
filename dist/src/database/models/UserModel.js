"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.UserModel = db_1.db.define("usuarios", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'id',
    },
    usuario: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'usuario'
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        field: 'senha'
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'status'
    }
});
