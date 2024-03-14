'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Content)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'Username is required' },
        notEmpty: { msg: 'Username is required' }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {msg: 'Email is required'},
        notEmpty: {msg: 'Email is required'},
        isEmail: {msg: 'Email is incorrect'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Password is required'},
        notEmpty: {msg: 'Password is required'}
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};