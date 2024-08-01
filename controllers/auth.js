const Principal = require('../models/principal');
const Teacher = require('../models/teacher');
const Student = require('../models/student');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');




const maxAge = 60 * 60 * 24;
const createToken = (id) => {
    return jwt.sign({ id }, 'gizli kelime', { expiresIn: maxAge });
};

exports.getLogin = (req, res, next) => {
    res.render('account/login', {
        path: '/login',
        title: 'Login'
    });
};




exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      let user;
  
      user = await Principal.findOne({ where: { email } });
      if (!user) {
        user = await Teacher.findOne({ where: { email } });
      }
      if (!user) {
        user = await Student.findOne({ where: { email } });
      }
  
      if (!user) {
        return res.status(400).render('account/login', { error: 'User not found' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).render('account/login', { error: 'Invalid credentials' });
      }
  
      const token = createToken(user.id);
      res.cookie('jwt', token, { httpOnly: true, secure: false, maxAge: 3600000 });

  
      return res.redirect('/'); // Başarılı giriş sonrası yönlendirme
    } catch (e) {
      console.log(e);
    }
  };
  




exports.getRegister  =(req,res) => {
    res.render('account/register',{
        path : '/register',
        title:'Register'
    })
}



exports.postRegister = async (req, res) => {
    const { email, password, role, userName } = req.body;
    try {
        if (role === 'principal') {
            await Principal.create({ email, password, userName });
        } else if (role === 'teacher') {
            const principal = await Principal.findOne();
            if (!principal) throw new Error('Principal not found');
            await Teacher.create({ email, password, userName, principalId: principal.id });
        } else if (role === 'student') {
            const principal = await Principal.findOne();
            if (!principal) throw new Error('Principal not found');
            await Student.create({ email, password, userName, principalId: principal.id });
        } else {
            throw new Error('Invalid role');
        }
        res.redirect('/auth/login');
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
};







exports.getLogout =(req,res,next) => {
    res.cookie('jwt','',{maxAge:1})
    res.redirect('/auth/logout')
}



