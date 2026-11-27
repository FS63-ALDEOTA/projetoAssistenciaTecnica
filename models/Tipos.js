import {DataTypes} from 'sequelize';
import sequelize from '../db.js'
import Equipamentos from './Equipamentos.js'

const Tipos = sequelize.define('Tipos', {
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
  tableName: 'tipos',
  timestamps: false
}
);

Tipos.hasMany(Equipamentos, {
  foreignKey: "tipo_id"
})

export default Tipos