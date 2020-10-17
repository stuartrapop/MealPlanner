const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class UserBelongsGroup extends Model {}

UserBelongsGroup.init({
      user_role: {
        type: DataTypes.STRING,
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
    tableName: 'user_belongs_group'
});

module.exports = UserBelongsGroup;
