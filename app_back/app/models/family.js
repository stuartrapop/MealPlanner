const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Family extends Model {}

Family.init({
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
    tableName: 'family'
});

module.exports = Family;
