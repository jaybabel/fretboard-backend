const Chords = require('../models').Chords;

const getChords = (req, res) => {
    // res.send('chords request received in controller')
    Chords.findAll({attributes:['chordname', 'imageurl', 'isbarchord']})
    .then(chords => {
        res.json(chords)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`);
    })
}

// SELECT "Chords".chordname
// FROM "Chords" 
// INNER JOIN "Key_Chords"
// 	ON "Key_Chords".chordid = "Chords".id
// INNER JOIN "MusicalKeys"
// 	ON "Key_Chords".keyid = "MusicalKeys".id
// WHERE "MusicalKeys".keyname = 'C';

module.exports = {
    getChords
}