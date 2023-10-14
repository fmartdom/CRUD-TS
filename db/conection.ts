import { Sequelize } from 'sequelize';
                        //1. Nombre de base de datos, 2. usuario, 3
const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    //logging: false
});

export default db;