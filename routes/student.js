const express = require('express')
const router = express.Router()
const stuCtrl = require('../controllers/student')
const {authorizeStudent} = require('../middlewares/authMiddle')

router.get('/studentGrades/:id',authorizeStudent(['student']),stuCtrl.findGrade)

module.exports = router