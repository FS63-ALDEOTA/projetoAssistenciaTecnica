import { DataTypes } from "sequelize";
import sequelize from "../db";
const Roles = sequelize.define(
    'Roles',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descricao:{
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    tableName: 'roles',
    timestamps: false
});

Roles.hasMany(Usuario, {
    foreignKey: 'usuario_id'
})