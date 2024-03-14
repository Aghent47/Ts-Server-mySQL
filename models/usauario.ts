import { DataTypes } from 'sequelize';
import db from '../db/connections';

const Usuario = db.define('Usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false // Campo obligatorio
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
});

export default Usuario;