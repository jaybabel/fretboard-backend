const MusicalKeys = require('../models').MusicalKeys;

// app.get('/keys', function (req, res) {
//     res.send('musical key request')
// })

const getAllKeys = (req, res) => {
    // res.send('musical key request received in controller')
    MusicalKeys.findAll()
    .then(keys => {
        res.json(keys)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`);
    })
}


module.exports = {
    getAllKeys
}