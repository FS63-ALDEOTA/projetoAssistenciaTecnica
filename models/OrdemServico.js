import { DataTypes } from 'sequelize';
import sequelize from '../db.js'
import Clientes from './Clientes.js';
import Funcionarios from './Funcionarios.js';
const OrdemServico = sequelize.define('OrdemServico', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status_id: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 1
  },
  funcionario_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  data_entrada: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  data_saida: {
    type: DataTypes.DATE,
    allowNull: true
  },
  valor_total_os: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true
  }
}, {
  tableName: 'ordem_servico',
  timestamps: false
});

// uma OS possui um cliente
OrdemServico.belongsTo(Clientes, {
    foreignKey: 'cliente_id'
})
// uma OS possui um status
OrdemServico.belongsTo(Status, {
    foreignKey: 'status_id'
})

// uma OS possui um funcionário
OrdemServico.belongsTo(Funcionarios, {
    foreignKey: 'funcionarios_id'
})

// uma OS pode ter muitos Item e um Item pode estar em várias OS
OrdemServico.belongsToMany(Equipamentos, 
  { 
    through: 'EquipamentosOS',
    foreignKey: "os_id",
    otherKey: "equipamento_id" 
  });


export default OrdemServico;