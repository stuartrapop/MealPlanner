const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads/images/',
  filename(req, file, cb) {
    //    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  //  cb(null, `${file.fieldname}${path.extname(file.originalname)}`);
    cb(null, `${file.originalname}`);
  },
});

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }
  return cb('Error: Images Only!');
}

const upload = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    checkFileType(file, cb);
  },

}).single('myImage');

const imageController = {
  upload: (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        res.send({
          err,
        });
      }
      else if (req.file === undefined) {
        res.send({
          msg: 'Error: No File Selected!',
        });
      }
      else {
        res.send({
          msg: 'File Uploaded!',
          file: `images/${req.file.filename}`,
        });
      }
    });
  },
};

module.exports = imageController;
