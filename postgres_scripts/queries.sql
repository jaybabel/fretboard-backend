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