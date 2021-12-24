const User_Recordings = require('../models').User_Recordings;
const User = require('../models').User_Account;
const { Op } = require("sequelize");

const addRecording = (req, res) => {
    User_Recordings.create(req.body)
        .then((newRecording) => {
            [ newRecording.userId,
              newRecording.recordingname, 
              newRecording.recordingurl,
              newRecording.memo
            ]
        })
}

const getRecordings = (req, res) => {
    // res.send('recordings request received in controller')
    User_Recordings.findAll(
        // add join
        { include: [{ 
            model: User,
            where: {username: {[Op.eq]: req.params.user}
            }
          }]
        }
    )   
    .then(recordings => {
        res.json(recordings)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`);
    })
}

const getRecordingData = (req, res) => {
   // console.log("getRecordingData request, ", req.body)
    User_Recordings.findOne({
        attributes:['id', 'recordingname', 'recordingurl', 'memo'],
        where: { recordingname: req.body.recordingname }
    })

    .then(recordingdata => {
        res.json(recordingdata)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`);
    })    
}

module.exports = {
    addRecording,
    getRecordings,
    getRecordingData
}