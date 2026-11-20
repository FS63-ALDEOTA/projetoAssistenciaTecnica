import { Client } from 'pg';
import { Sequelize, DataTypes }from 'sequelize'

const Clientes = Sequelize.define(
  'Clientes',
  {
    id: {
      type: DataTypes.SERIAL,
      auto_increment: true,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(11),
     
    },
    endereco_id: {
      type: DataTypes.INTEGER,
     
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    
    },
    criado_em: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_DATE')
    },
  },
  {
     tableName: 'Clientes'
  },
);

Clientes.hasOne(Enderecos, {
    foreign_key: 'enderecos_id'
})