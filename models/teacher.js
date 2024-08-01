const Sequelize  = require('sequelize')
const sequelize = require('../utility/database')
const bcrypt = require('bcrypt')

const Teacher = sequelize.define('teachers',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    userName:{
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
          model: 'Principal',
          key: 'id',
        },
      },

    role: {
        type: Sequelize.STRING,
          // Role alanının zorunlu olduğunu belirtiyor
    }

    
},
{
    hooks: {
        beforeSave: async (teacher, options) => {
            if (teacher.changed('password')) {
                console.log("Password is being hashed");
                teacher.password = teacher.password.toString();
                console.log("Password type:", typeof teacher.password);
                const salt = await bcrypt.genSalt();
                teacher.password = await bcrypt.hash(teacher.password, salt);
                console.log("Hashed password: ", teacher.password);
            }
        }
    }
})

Teacher.login = async function(userName, password) {
    const teac = await this.findOne({ where: { userName } });
    if (teac) {
        const auth = await bcrypt.compare(password, prc.password);
        console.log("Password comparison result: ", auth); // Ekle
        if (auth) {
            return teac;
        } else {
            throw Error('parola hatali');
        }
    } else {
        throw Error('kullanici adini girmediniz');
    }
};

module.exports=Teacher