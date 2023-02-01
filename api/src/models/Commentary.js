const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('commentary', {
        menssageComment: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10, 5000]
            }
        },

        commentDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },

        ratingComment: {
            type: DataTypes.REAL,
            allowNull: false,
            validate: {
                min: 0,
                max: 5
            }
        },

        hidden: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
        { timestamps: false }
    )
}