'use strict';
const bcryptjs = require('bcryptjs');
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
    }
  }
  User.init({
    username: {  
      type:DataTypes.STRING,
      allowNull:false,
      unique:{
        msg:
          "Username already exist"
        
      },
      validate:{
        notEmpty:{
          msg:"Username Cannot be empty"
        },
        notNull:{
          msg:"Username Cannot be empty"
        }
      }
    },
    password:  {  
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"Password Cannot be empty"
        },
        notNull:{
          msg:"Password Cannot be empty"
        },
        len:{
          args:[5,20],
          msg:"Minimum password is 6 character"
        }
      }
    },
    saldo: DataTypes.NUMBER,
    rekening: DataTypes.NUMBER,
    isAgree:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(user =>{
    user.saldo = 100000000
    user.password = bcryptjs.hashSync(user.password)
    user.rekening = Math.ceil(Math.random() * 1000000000)  
  })
  return User;
};