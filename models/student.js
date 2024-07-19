const Sequelize  = require('sequelize')
const sequelize = require('../utility/database')

const Student = sequelize.define('student', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    principalId: {
      type: Sequelize.INTEGER,
      allowNull:false,
      references: {
        model: 'principals',
        key: 'id',
      },
    },
  });

  

 module.exports=Student