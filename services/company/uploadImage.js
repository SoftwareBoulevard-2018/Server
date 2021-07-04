const express = require('express');

const router = express.Router();

var multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/company_img/')
    },
    filename: function (req, file, cb) {
        let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
});
  
var upload = multer({ storage: storage })

router.post('/', upload.single('image'),(req, res, next) => {
    res.status(200).send(req.protocol + '://' + req.get('host') +'/static/company_img/'+req.file.filename);
})

module.exports = router;