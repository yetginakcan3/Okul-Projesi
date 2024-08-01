const express = require('express')
const router = express.Router()
const teacCtrl = require('../controllers/teacher')
const {authorizeTeacher} = require('../middlewares/authMiddle')

router.post('/grades',authorizeTeacher(['teacher']),teacCtrl.createOneGrade)
router.post('/bulkGrades',authorizeTeacher(['teacher']),teacCtrl.bulkCreateGrade)
router.get('/grades',authorizeTeacher(['teacher']),teacCtrl.findGrade)
router.put('/grades',authorizeTeacher(['teacher']),teacCtrl.updateGrade)
router.delete('/grades',authorizeTeacher(['teacher']),teacCtrl.delItemGrade)

module.exports = router