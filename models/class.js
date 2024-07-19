const Sequelize  = require('sequelize')
const sequelize = require('../utility/database')

const Class = sequelize.define('class',{
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
    
    courseId:{
        type:Sequelize.INTEGER,
        references: {
            model: 'courses',
            key: 'id',
          },
        },
        
 });
module.exports=Class