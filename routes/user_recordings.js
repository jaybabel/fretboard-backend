const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// router.get('/', function (req, res) {
//     res.send('musical key request received in router')
// })
router.get('/', ctrl.user_recordings.getRecordings);

module.exports = router;