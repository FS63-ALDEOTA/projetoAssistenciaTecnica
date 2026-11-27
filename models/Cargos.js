import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Funcionarios from './Funcionarios.js';

const Cargos = sequelize.define('Cargos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descricao: {
        type: DataTypes.CHAR(50)
    }
}, {
    tableName: 'cargos',
    timestamps: false
});


Cargos.hasOne(Funcionarios, {
    foreignKey: 'cargo_id',
});


export default Cargos;