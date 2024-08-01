const express = require('express');
const router = express.Router();
const { authorizePrincipal } = require('../middlewares/authMiddle');

router.get('/dashboard', authorizePrincipal(['principal']), (req, res, next) => {
    res.send('Admin Dashboard');
});

router.get('/manage-teachers', authorizePrincipal(['principal']), (req, res, next) => {
    res.send('Manage Teachers');
});

router.get('/manage-students', authorizePrincipal(['principal']), (req, res, next) => {
    res.send('Manage Students');
});

module.exports = router;

