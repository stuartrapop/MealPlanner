const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Type extends Model {}

Type.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},
{
  sequelize,
  tableName: 'type',
});

module.exports = Type;
