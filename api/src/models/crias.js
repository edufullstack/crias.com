const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('crias', {
    identificador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    proveedor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fecha: {
      type: DataTypes.DATEONLY,
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
    },
    dieta: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tratamiento: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });
};
