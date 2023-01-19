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

    room: {
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
      allowNull: false
    },

    pictureHome: {
      type: DataTypes.STRING,
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
    }
  },
    { timestamps: false }
  )
};
