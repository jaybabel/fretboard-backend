SELECT chords.chordname 
FROM chords 
INNER JOIN key_chord
	ON key_chord.chord_id = chords.id
INNER JOIN musicalkey
	ON key_chord.musicalkey_id = musicalkey.id
WHERE musicalkey.keyname = 'C';


SELECT CONCAT (chords.chordname,'+') 
FROM chords 
INNER JOIN key_chord
	ON key_chord.chord_id = chords.id
INNER JOIN musicalkey
	ON key_chord.musicalkey_id = musicalkey.id
WHERE musicalkey.keyname = 'E';


SELECT scales.scalename 
FROM scales 
INNER JOIN key_scale
	ON key_scale.scale_id = scales.id
INNER JOIN musicalkey
	ON key_scale.musicalkey_id = musicalkey.id
WHERE musicalkey.keyname = 'A';
