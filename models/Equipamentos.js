import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Cliente from './Cliente.js';
import Marca from './Marca.js';
import Tipo from './Tipo.js';
import OrdemServico from './OrdemServico.js';
import EquipamentoOS from './EquipamentoOS.js';

const Equipamentos = sequelize.define('Equipamentos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    marca_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cor: {
        type: DataTypes.STRING(15)
    },
    tamanho: {
        type: DataTypes.STRING(20)
    },
    ano: {
        type: DataTypes.CHAR(4)
    },
    serie: {
        type: DataTypes.STRING(15)
    },
    descricao: {
        type: DataTypes.STRING(255)
    },
    criado_em: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'equipamentos',
    timestamps: false
});


// Cliente 1:N Equipamentos
Equipamentos.belongsTo(Cliente, {
    foreignKey: 'cliente_id',
});


// Marca 1:N Equipamentos
Equipamentos.belongsTo(Marca, {
    foreignKey: 'marca_id',
});


// Tipo 1:N Equipamentos
Equipamentos.belongsTo(Tipo, {
    foreignKey: 'tipo_id',
});

// Equipamento N:M OrdemServico
Equipamentos.belongsToMany(OrdemServico, {
    through: EquipamentoOS,
    foreignKey: 'equipamento_id',
    otherKey: 'os_id',
});




export default Equipamentos;