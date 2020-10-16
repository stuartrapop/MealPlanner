const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Type extends Model {}

Type.init({
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
    tableName: 'type'
});

module.exports = Type;
