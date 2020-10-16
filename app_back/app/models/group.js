const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Group extends Model {}

Group.init({
      name: {
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
    tableName: 'group'
});

module.exports = Group;
