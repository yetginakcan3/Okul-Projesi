const Sequelize  = require('sequelize')
const sequelize = require('../utility/database')
const bcrypt = require('bcrypt')


const Principal = sequelize.define('principal',{
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
    }
    

    

},

{
    hooks: {
        beforeSave: async (principal, options) => {
            if (principal.changed('password')) {
                console.log("Password is being hashed");
                const salt = await bcrypt.genSalt();
                principal.password = await bcrypt.hash(principal.password, salt);
                console.log("Hashed password: ", principal.password);
            }
        }
    }
})

Principal.login = async function(userName, password) {
    const prc = await this.findOne({ where: { userName } });
    if (prc) {
        const auth = await bcrypt.compare(password, prc.password);
        console.log("Password comparison result: ", auth); // Ekle
        if (auth) {
            return prc;
        } else {
            throw Error('parola hatali');
        }
    } else {
        throw Error('kullanici adini girmediniz');
    }
};




   



module.exports=Principal
    