import { DataTypes } from 'sequelize';
import sequelize from '../db.js'
const Servicos = sequelize.define(
  'Servicos',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  },
  {
    tableName: 'servicos',
    timestamps: false
  },
);


export default Servicos

// Um servico pode estar em muitos itens
Servicos.hasMany(ItensOrdemServico, {
  foreignKey: "servico_id"
})