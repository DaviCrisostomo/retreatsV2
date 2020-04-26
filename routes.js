var express = require('express'),
router = express.Router(),
retreatCtrl = require('./retreat_controller');

router.post('/retreat', retreatCtrl.createRetreat);
router.get('/retreat', retreatCtrl.getRetreats);
router.get('/retreat/:id', retreatCtrl.getRetreat);
router.delete('/retreat/:id', retreatCtrl.deleteRetreat);
router.put('/retreat/:id', retreatCtrl.updateRetreat);
/*
module.exports.UPLOAD_PATH = 'uploads';

var multer = require('multer');
var upload = multer({ dest: module.exports.UPLOAD_PATH });
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);
*/
module.exports = router;