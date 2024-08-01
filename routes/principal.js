const express = require('express')
const router = express.Router()
const prcCtrl = require('../controllers/principal')
const { authorizePrincipal } = require('../middlewares/authMiddle');

router.post('/createteachers',authorizePrincipal(['principal']),prcCtrl.createOneTeacher)
router.post('/bulkteachers',authorizePrincipal(['principal']),prcCtrl.bulkCreateTeacher)
router.get('/teachers/:id',authorizePrincipal(['principal']),prcCtrl.findTeacher)
router.put('/teachers/:id',authorizePrincipal(['principal']),prcCtrl.updateTeacher)
router.delete('/teachers/:id',authorizePrincipal(['principal']),prcCtrl.delItemTeacher)

router.post('/students', authorizePrincipal(['principal']), prcCtrl.createOneStudent);
router.post('/bulkStudents',authorizePrincipal(['principal']),prcCtrl.bulkCreateStudent)
router.get('/students/:id',authorizePrincipal(['principal']),prcCtrl.findStudent)
router.put('/students/:id',authorizePrincipal(['principal']),prcCtrl.updateStudent)
router.delete('/students/:id',authorizePrincipal(['principal']),prcCtrl.delItemStudent)


router.post('/classes',authorizePrincipal(['principal']),prcCtrl.createOneClass)
router.post('/bulkClasses',authorizePrincipal(['principal']),prcCtrl.bulkCreateClass)
router.get('/classes/:id',authorizePrincipal(['principal']),prcCtrl.findClass)
router.put('/classes/:id',authorizePrincipal(['principal']),prcCtrl.updateClass)
router.delete('/classes/:id',authorizePrincipal(['principal']),prcCtrl.delItemClass)



router.post('/courses',authorizePrincipal(['principal']),prcCtrl.createOneCourse)
router.post('/bulkCourses',authorizePrincipal(['principal']),prcCtrl.bulkCreateCourse)
router.get('/courses/:id',authorizePrincipal(['principal']),prcCtrl.findCourse)
router.put('/courses/:id',authorizePrincipal(['principal']),prcCtrl.updateCourse)
router.delete('/courses/:id',authorizePrincipal(['principal']),prcCtrl.delItemCourse)





module.exports = router
