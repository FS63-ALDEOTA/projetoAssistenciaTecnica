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
      auto_increment: true,
        allowNull: false,
    }
  },
  {
    tableName: 'servicos',
    timestamps: false
  },
);
