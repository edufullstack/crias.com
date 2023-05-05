const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('usuario', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
