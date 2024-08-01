// routes/yourRoutes.js
const express = require('express');
const router = express.Router();
const { requireAuth, checkRole } = require('../middlewares/authMiddle');
const middleController = require('../controllers/middleController');

router.get('/principal', requireAuth, checkRole('Principal'), middleController.principalDashboard);
router.get('/teacher', requireAuth, checkRole('Teacher'), middleController.teacherDashboard);
router.get('/student', requireAuth, checkRole('Student'), middleController.studentDashboard);

module.exports = router;
