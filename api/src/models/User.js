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
        },

        tokenAdmin: {
            type: DataTypes.STRING,
            defaultValue: "No",
        },

        blocked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },

        favoriteHotels: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
        },

        img: {
            type: DataTypes.STRING,
        },

        address: {
            type: DataTypes.STRING,
        },

        phone: {
            type: DataTypes.STRING,
        }

    },
        { timestamps: false }
    );
};