const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {

        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }

    },
        { timestamps: false }
    );
};