const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('reservation', {
        people: {
            type: DataTypes.INTEGER,
            allowNull: false
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