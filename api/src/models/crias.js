const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('crias', {
    identificador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    proveedor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNullL: true,
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    saludable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    dieta: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tratamiento: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cuarentena: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
