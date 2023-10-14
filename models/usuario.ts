import { DataTypes } from 'sequelize';
import db from '../db/conection';

const Usuario = db.define('Usuario', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
    type: DataTypes.JSON
    },
    updatedAt: {
        type: DataTypes.JSON
        },
    },
    {
        tableName: 'usuarios',
      }
    );

export default Usuario;