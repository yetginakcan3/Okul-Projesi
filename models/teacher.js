const Sequelize  = require('sequelize')
const sequelize = require('../utility/database')

const Teacher = sequelize.define('teachers',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    principalId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'principals',
          key: 'id',
        },
      },

    
})

module.exports=Teacher