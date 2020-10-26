const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Group extends Model {}

Group.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

},
{
  sequelize,
  tableName: 'group',
});

module.exports = Group;
