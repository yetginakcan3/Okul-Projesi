const Sequelize  = require('sequelize')
const sequelize = require('../utility/database')

const Course = sequelize.define('course',{
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
    description: {
        type: Sequelize.STRING,
      },
    teacherId:{
        type:Sequelize.INTEGER,
        references: {
            model: 'teachers',
            key: 'id',
          },
        },
 });
module.exports=Course