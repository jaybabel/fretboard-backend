const Scales = require('../models').Scales;
const MusicalKeys = require('../models').MusicalKeys;

const getScales = (req, res) => {

    Scales.findAll({
        attributes:['scalename', 'imageurl'], 
         include: {
             model: MusicalKeys,
             required: true,
             attributes:['id', 'keyname'],
            // model: Key_Chords,
            // attributes:['ChordId', 'MusicalKeyId'],
            where: {
                keyname: (req.params.key)
            }
        }
    })

    .then(scales => {
        res.json(scales)
    })
    .catch(err => {
        res.send(`ERROR: ${err}`);
    })
}

module.exports = {
    getScales
}