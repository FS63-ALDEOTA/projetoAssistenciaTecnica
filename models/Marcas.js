import Equipamentos from './Equipamentos.js';

const { DataTypes } = require('sequelize');
const sequelize = require('../db.js'); 

const Marcas = sequelize.define('Marcas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'marcas',
  timestamps: false 
});

Marcas.hasMany(Equipamentos,{
    foreignKey: 'marca_id',
})

export default Marcas;