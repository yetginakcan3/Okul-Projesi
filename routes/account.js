const express = require('express')
const router = express.Router()


const accCtrl = require('../controllers/account')

router.get('/login',accCtrl.getLogin)
router.post('/login',accCtrl.postLogin)

router.get('/register',accCtrl.getRegister)
router.post('/register',accCtrl.postRegister)

router.get('/reset',accCtrl.getReset)
router.post('/reset',accCtrl.postReset)

module.exports = router