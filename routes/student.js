const express = require('express')
const router = express.Router()
const stuCtrl = require('../controllers/student')

router.get('/studentGrades',stuCtrl.findGrade)

module.exports = router