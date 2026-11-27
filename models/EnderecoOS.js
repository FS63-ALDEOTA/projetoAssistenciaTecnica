import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Equipamentos from './Equipamentos.js';
import Funcionarios from './Funcionarios.js';
import Servicos from './Servicos.js';
import Status from './Status.js';

const EquipamentoOS = sequelize.define('EquipamentoOS', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    equipamento_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    funcionario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    servico_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    observacao: {
        type: DataTypes.CHAR(255)
    },
    valor_total_item: {
        type: DataTypes.DECIMAL(10, 2)
    }
}, {
    tableName: 'equipamentos_os',
    timestamps: false
});


EquipamentoOS.belongsTo(Equipamentos, {
    foreignKey: 'equipamento_id',
});


EquipamentoOS.belongsTo(Status, {
    foreignKey: 'status_id',
});

EquipamentoOS.belongsTo(Funcionarios, {
    foreignKey: 'funcionario_id',
});

EquipamentoOS.belongsTo(Servicos, {
    foreignKey: 'servico_id',
});


export default EquipamentoOS;