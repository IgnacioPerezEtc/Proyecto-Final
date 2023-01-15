const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('hotel', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
