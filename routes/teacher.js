const express = require('express')
const router = express.Router()
const teacCtrl = require('../controllers/teacher')

router.post('/grades',teacCtrl.createOneGrade)
router.post('/bulkGrades',teacCtrl.bulkCreateGrade)
router.get('/grades',teacCtrl.findGrade)
router.put('/grades',teacCtrl.updateGrade)
router.delete('/grades',teacCtrl.delItemGrade)

module.exports = router