const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class UserBelongsGroup extends Model {}

UserBelongsGroup.init({
  user_role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  sequelize,
  tableName: 'user_belongs_group',
});

module.exports = UserBelongsGroup;
