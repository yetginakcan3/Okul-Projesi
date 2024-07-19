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
    teacherId:{
        type:Sequelize.INTEGER,
        references:{
            model:'teachers',
            key:'id',
        },
    },
    value:{
        type:Sequelize.FLOAT
    }
    

 });

 

module.exports=Grade