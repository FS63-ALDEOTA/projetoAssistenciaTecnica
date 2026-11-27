import {DataTypes} from 'sequelize';
import sequelize from '../db.js'

const Tipos = sequelize.define('Tipos', {
  id: {
    type: DataTypes.INTEGER,
    AllowNull: false,
    AutoIncrement: true,
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