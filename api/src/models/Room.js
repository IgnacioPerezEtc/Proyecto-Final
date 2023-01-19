const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('room', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },

        numPeople: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
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

    }, { timestamps: false }
    );
}