const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// router.get('/', function (req, res) {
//     res.send('musical key request received in router')
// })
router.post('/addRecording', ctrl.user_recordings.addRecording);
router.get('/:user', ctrl.user_recordings.getRecordings);
router.post('/getRecordingData', ctrl.user_recordings.getRecordingData);
router.post('/deleteRecording/:id', ctrl.user_recordings.deleteRecording);

module.exports = router;