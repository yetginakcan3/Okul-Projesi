const express = require('express')
const router = express.Router()
const prcCtrl = require('../controllers/principal')

router.post('/teachers',prcCtrl.createOneTeacher)
router.post('/bulkteachers',prcCtrl.bulkCreateTeacher)
router.get('/teachers',prcCtrl.findTeacher)
router.put('/teachers',prcCtrl.updateTeacher)
router.delete('/teachers',prcCtrl.delItemTeacher)

router.route('/students').post(prcCtrl.createOneStudent)
router.route('/bulkStudents').post(prcCtrl.bulkCreateStudent)
router.route('/students').get(prcCtrl.findStudent)
router.route('/students').put(prcCtrl.updateStudent)
router.route('/students').delete(prcCtrl.delItemStudent)


router.route('/classes').post(prcCtrl.createOneClass)
router.route('/bulkClasses').post(prcCtrl.bulkCreateClass)
router.route('/classes').get(prcCtrl.findClass)
router.route('/classes').put(prcCtrl.updateClass)
router.route('/classes').delete(prcCtrl.delItemClass)



router.route('/courses').post(prcCtrl.createOneCourse)
router.route('/bulkCourses').post(prcCtrl.bulkCreateCourse)
router.route('/courses').get(prcCtrl.findCourse)
router.route('/courses').put(prcCtrl.updateCourse)
router.route('/courses').delete(prcCtrl.delItemCourse)





module.exports = router
