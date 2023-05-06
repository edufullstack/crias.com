const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('sensor', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    freCardiaca: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    preSanguinea: {
      type: DataTypes.INTEGER,
      allowNullL: false,
    },
    freRespiratoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    temperatura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
};
