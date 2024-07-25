const Principal = require('../models/principal')
const jwt = require('jsonwebtoken')

const maxAge=60*60*24
const createToken = (id) => {
    return jwt.sign({id}, 'gizli kelime' , {expiresIn:maxAge})
}


exports.getLogin  =(req,res,next) => {
    res.render('account/login',{
        path : '/login',
        title:'Login'
    })
}


exports.postLogin  = async (req,res,next) => {

   const {userName,password} = req.body
    
    try {
        const prc = await Principal.login(userName,password) 
        const token = createToken(prc._id)
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000})
        res.redirect('/admin/add-student')
    } 
    catch(e){
        console.log(e)
    }

    
}


exports.getRegister  =(req,res,next) => {
    res.render('account/register',{
        path : '/register',
        title:'Register'
    })
}


exports.postRegister  =(req,res) => {
 
    console.log(req.body)
    const { userName, email, password } = req.body;

    const principal = new Principal({
        userName: userName,  // username yerine userName olarak alıyoruz
        email: email,
        password: password
    });

    
    principal.save()
        .then((result) => {
            res.redirect('/login')
        })
        .catch((err) => {
            console.log(err)
        })
    
}


exports.getLogout =(req,res,next) => {
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/login')
}



