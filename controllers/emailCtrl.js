// /controllers/emailController.js
const nodemailer = require('nodemailer')



const sendVerificationEmail = async (email, userName) => {
    try {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "afyonluyetgin01@gmail.com",
                pass: "jksp aadi nern xdng"
            }
        });

        const mailOptions = {
            from: "afyonluyetgin01@gmail.com",
            to: email,
            subject: 'Kayıt Doğrulama',
            text: `Merhaba ${userName}, kaydınız başarıyla tamamlandı.`,
            html: `<b>Merhaba ${userName},</b><br>Kaydınız başarıyla tamamlandı.`
        };

        await transporter.sendMail(mailOptions);
        console.log('Doğrulama e-postası gönderildi.');
    } catch (error) {
        console.error('E-posta gönderim hatası:', error);
    }
};

module.exports = { sendVerificationEmail };
