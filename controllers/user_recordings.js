const User_Recordings = require('../models').User_Recordings;

// app.get('/keys', function (req, res) {
//     res.send('musical key request')
// })

const getRecordings = (req, res) => {
    // res.send('recordings request received in controller')
    User_Recordings.findAll()
    .then(recordings => {
        res.json(recordings)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`);
    })
}


module.exports = {
    getRecordings
}