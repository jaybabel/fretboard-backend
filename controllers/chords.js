const Chords = require('../models').Chords;
const MusicalKeys = require('../models').MusicalKeys;

const getChords = (req, res) => {

    Chords.findAll({
        attributes:['chordname', 'imageurl', 'isbarchord'],       
         include: {
             model: MusicalKeys,
             required: true,
            where: {
                keyname: (req.params.key)
            }
        }
    })

    .then(chords => {
        res.json(chords)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`);
    })
}

module.exports = {
    getChords
}