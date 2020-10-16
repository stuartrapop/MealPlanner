const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Review extends Model {}

Review.init({
      comment: {
        type: DataTypes.STRING,
        allowNull: false
      },
      grade: {
         type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        field: 'createdAt',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updatedAt',
        type: DataTypes.DATE, 
    }, 
  },
    {
    sequelize,
    tableName: 'review'
});

module.exports = Review;
