const Sequelize  = require('sequelize')
const sequelize = require('../utility/database')
const bcrypt = require('bcrypt')

const Student = sequelize.define('student', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
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

    role: {
      type: Sequelize.STRING,
       // Role alanının zorunlu olduğunu belirtiyor
  }

  },
  {
    hooks: {
        beforeSave: async (student, options) => {
            if (student.changed('password')) {
                console.log("Password is being hashed");
                student.password = student.password.toString();
                const salt = await bcrypt.genSalt();
                student.password = await bcrypt.hash(student.password, salt);
                console.log("Hashed password: ", student.password);
            }
        }
    }
});

Student.login = async function(userName, password) {
  const stu = await this.findOne({ where: { userName } });
  if (stu) {
      const auth = await bcrypt.compare(password, prc.password);
      console.log("Password comparison result: ", auth); // Ekle
      if (auth) {
          return stu;
      } else {
          throw Error('parola hatali');
      }
  } else {
      throw Error('kullanici adini girmediniz');
  }
};
  

 module.exports=Student