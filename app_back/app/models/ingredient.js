const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Ingredient extends Model {}

Ingredient.init({

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  weight: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
  },

  volume: {
    type: DataTypes.BOOLEAN(),
    allowNull: false,
  },
  countable: {
    type: DataTypes.BOOLEAN(),
    allowNull: false,
  },

},
{
  sequelize,
  tableName: 'ingredient',
});

module.exports = Ingredient;
