exports.uploadFile = (req, res) => {
    try {
      res.status(200).json({
        message: 'Dosya başarıyla yüklendi.',
        file: req.file
      });
    } catch (error) {
      res.status(400).json({
        message: 'Dosya yüklenemedi.',
        error: error.message
      });
    }
  };
  