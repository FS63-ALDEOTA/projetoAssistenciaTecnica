import { Sequelize, DataTypes } from 'sequelize'
import { DataTypes } from 'sequelize';

const equipamentos = Sequelize.define(
  {
    id: {
      type: DataTypes.SERIAL,
      auto_increment: true,
      allowNull: false,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    marca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cor: {
      type: DataTypes.STRING(15),
    },
    tamanho: {
      type: DataTypes.STRING(20),
    },
    ano: {
      type: DataTypes.STRING(4),
    },
    serie: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    observacao: {
      type: DataTypes.STRING(255),
    },
    criado_em: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_DATE')
    },
  },
  {
     tableName: 'equipamentos'
  },
);

equipamentos.hasOne(clientes, {
    foreign_key: 'cliente_id'
})  

equipamentos.hasOne(tipos, {
    foreign_key: 'tipo_id'
})  

equipamentos.hasOne(marcas, {
    foreign_key: 'marca_id'
})  