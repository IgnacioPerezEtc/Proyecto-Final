const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('hotel', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 150]
      }
    },

    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [10, 5000]
      },
      allowNull: false
    },

    parking: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    restaurant: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    publicPool: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    bar: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    wifi: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    pictureHome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isUrl: true }
    },

    pictureDetail: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      validate: { isUrl: true }
    },

    rating: {
      type: DataTypes.REAL,
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      }
    },

    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },

    category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [8, 16] }
    },

    hidden: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    position: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
    { timestamps: false }
  )
};
