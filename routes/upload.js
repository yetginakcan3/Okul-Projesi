const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const uploadController = require('../controllers/upload');

// Dosya yükleme rotası
router.post('/', upload.single('file'), uploadController.uploadFile);

module.exports = router;
