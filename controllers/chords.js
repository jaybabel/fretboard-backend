const Chords = require('../models').Chords;
const MusicalKeys = require('../models').MusicalKeys;

const getChords = (req, res) => {

    Chords.findAll({
        attributes:['chordname', 'imageurl', 'isbarchord'],       
         include: {
             model: MusicalKeys,
             required: true,
            // as: 'MusicalKeyId',
            where: {
                keyname: 'E'
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