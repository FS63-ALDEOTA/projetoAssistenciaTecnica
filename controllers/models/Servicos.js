import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../../db.js';

const Servicos = sequelize.define(
  'Servicos',
  {
    id: {
      type: DataTypes.SERIAL,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(100),
      auto_increment: true,
        allowNull: false,
    }
  },
  {
    tableName: 'Servicos',
  },
);