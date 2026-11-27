const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); 

const Status = sequelize.define('Status', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(20),
    allowNull: false 
  }
}, {
  tableName: 'status',
  timestamps: false
});

Status.hasMany(Equipamentos,{
    foreignKey: 'marca_id',
})


export default Status;