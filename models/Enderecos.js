import Clientes from './Clientes.js';
import Funcionarios from './Funcionarios.js';

const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const Endereco = sequelize.define('Enderecos', {  
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING(8)
    },
    logradouro: {
        type: DataTypes.STRING(100)
    },
    num: {
        type: DataTypes.STRING(10)
    },
    bairro: {
        type: DataTypes.STRING(30)
    },
    cidade: {
        type: DataTypes.STRING(30)
    },
    uf: {
        type: DataTypes.CHAR(2)
    },
    complemento: {
        type: DataTypes.STRING(50)
    }
}, {
    tableName: 'enderecos',
    timestamps: false
});


Endereco.hasOne(Clientes, {
    foreignKey: 'endereco_id',
});

Endereco.hasOne(Funcionarios, {
    foreignKey: 'endereco_id',
});

export default Enderecos;
