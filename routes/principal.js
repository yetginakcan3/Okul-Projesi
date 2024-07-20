const express = require('express')
const router = express.Router()
const prcCtrl = require('../controllers/principal')

router.route('/create').post(prcCtrl.createOne)
router.route('/bulkcreate').post(prcCtrl.bulkCreate)

router.route('/find').get(prcCtrl.find)


router.route('/update/:id').put(prcCtrl.update)


router.route('/delete').delete(prcCtrl.delItem)


module.exports = router
