const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class User extends Model {}

User.init({
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
         type: DataTypes.STRING,
        allowNull: false
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
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
    tableName: 'user'
});

module.exports = User;
