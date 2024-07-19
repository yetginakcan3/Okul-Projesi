const Sequelize  = require('sequelize')
const sequelize = require('../utility/database')

const Grade = sequelize.define('grade',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
   studentId:{
    type:Sequelize.INTEGER,
    references:{
        model:'students',
        key:'id',
    },
   },
    courseID:{
        type:Sequelize.INTEGER,
        references:{
            model:'courses',
            key:'id',
        },
    },
    grade:{
        type:Sequelize.FLOAT
    }
    

 });

 

module.exports=Grade