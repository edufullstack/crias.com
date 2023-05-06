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
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNullL: false,
    },
    costo: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    saludable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
