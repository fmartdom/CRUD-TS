"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//1. Nombre de base de datos, 2. usuario, 3
const db = new sequelize_1.Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    //logging: false
});
exports.default = db;
//# sourceMappingURL=conection.js.map