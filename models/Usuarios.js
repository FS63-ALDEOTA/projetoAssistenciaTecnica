import {DataTypes} from 'sequelize';
import sequelize from '../db.js'
import Roles from './Roles.js'

const Usuarios = sequelize.define('Usuarios', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  role_id: {
    type: DataTypes.INTEGER,
    AllowNull: false
  },
  criado_em: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  alterado_em: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
},
{
    TableName: 'usuarios',
    timestamps: false
}

);

Usuarios.belongsTo(Roles)

export default Usuarios