const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Recipe extends Model {}

Recipe.init({

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: true
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull:true
      },

      cooking_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      number_people: {
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
    tableName: 'recipe'
});

module.exports = Recipe;
