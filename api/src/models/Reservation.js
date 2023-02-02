const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('reservation', {

        idReservation: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },

        people: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 10
            }
        },

        adults: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 10
            }
        },

        children: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 9
            }
        },

        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
    },
        { timestamps: false }
    )
}