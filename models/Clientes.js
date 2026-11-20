import { DataTypes } from 'sequelize'
import sequelize from '../db.js'

const Clientes = sequelize.define(
  'Clientes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
   
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
      defaultValue: DataTypes.NOW
    },
  },
  {
     tableName: 'clientes',
     timestamps: false
  },
);

// Clientes.hasOne(Enderecos, {
//     foreignKey: 'enderecos_id'
// })

export default Clientes