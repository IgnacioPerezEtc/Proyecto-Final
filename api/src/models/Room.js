const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('room', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        numRoom: {
            type: DataTypes.INTEGER,
            allowNull: false
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

        numPeople: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 10
            }
        },

        maxAdult: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 10
            }
        },

        maxChild: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 9
            }
        },

        specialties: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },

        availableDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        value: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

    },
        { timestamps: false }
    );
}