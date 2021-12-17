const User_Recordings = require('../models').User_Recordings;
const User = require('../models').User_Account;
const { Op } = require("sequelize");

// app.get('/keys', function (req, res) {
//     res.send('musical key request')
// })

const getRecordings = (req, res) => {
    // res.send('recordings request received in controller')
    User_Recordings.findAll(
        // add join
        { include: [{ 
            model: User,
            where: {username: {[Op.eq]: 'Jay'}
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
        attributes:['recordingname', 'recordingurl', 'memo'],
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
    getRecordings,
    getRecordingData
}