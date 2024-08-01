const Sequelize = require('sequelize');
const sequelize = require('../utility/database');
const bcrypt = require('bcrypt');

const Principal = sequelize.define('principal', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    role: {
        type: Sequelize.STRING,
         // Role alanının zorunlu olduğunu belirtiyor
    }
}, {
    hooks: {
        beforeSave: async (principal, options) => {
            if (principal.changed('password')) {
                console.log("Password is being hashed");
                principal.password = principal.password.toString();
                const salt = await bcrypt.genSalt();
                principal.password = await bcrypt.hash(principal.password, salt);
                console.log("Hashed password: ", principal.password);
            }
        }
    }
});

// Login fonksiyonu
Principal.login = async function (email, password) {
    const prc = await this.findOne({ where: { email } });
    if (prc) {
        const isMatch = await bcrypt.compare(password, prc.password); // Doğru karşılaştırma
        if (isMatch) {
            return prc;
        } else {
            throw new Error('parola hatalı');
        }
    } else {
        throw new Error('kullanıcı bulunamadı');
    }
};

module.exports = Principal;
