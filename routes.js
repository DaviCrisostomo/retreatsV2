var express = require('express'),
router = express.Router(),
retreatCtrl = require('./retreat_controller');
//All routes used by the CRUD functions
//I just copied them from your class, as you can see
router.post('/retreat', retreatCtrl.createRetreat);
router.get('/retreat', retreatCtrl.getRetreats);
router.get('/retreat/:id', retreatCtrl.getRetreat);
router.delete('/retreat/:id', retreatCtrl.deleteRetreat);
router.put('/retreat/:id', retreatCtrl.updateRetreat);

module.exports = router;