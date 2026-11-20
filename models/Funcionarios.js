import { Sequelize, DataTypes } from "sequelize";

const Funcionarios = Sequelize.define(
    'Funcionarios',
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
    tableName: 'Funcionarios'
  }
)