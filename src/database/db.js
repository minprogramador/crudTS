"use strict";
exports.__esModule = true;
exports.db = void 0;
var sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('upbusca', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});
