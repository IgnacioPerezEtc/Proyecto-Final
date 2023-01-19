const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {

        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [3, 255] }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [3, 255] }
        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: { min: 18, max: 100 }
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [8, 16] }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [6, 255] }
        },

        nationality: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [3, 255] }
        }

    },
        { timestamps: false }
    );
};