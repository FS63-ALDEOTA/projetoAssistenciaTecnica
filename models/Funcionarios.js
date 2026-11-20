import { DataTypes } from "sequelize";
import sequelize from '../db.js'
const Funcionarios = sequelize.define(
    'Funcionarios',
    {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
      allowNull: false,
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    criado_em: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_DATE')
    },
    cargo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'funcionarios',
    timestamps: false
  }
)

Funcionarios.hasOne(Enderecos, {
  foreignKey: 'endereco_id'
})
Funcionarios.hasOne(Cargos, {
  foreignKey: 'cargo_id'
})