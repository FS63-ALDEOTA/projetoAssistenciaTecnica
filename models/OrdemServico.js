import { DataTypes } from 'sequelize';

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

module.exports = OrdemServico;