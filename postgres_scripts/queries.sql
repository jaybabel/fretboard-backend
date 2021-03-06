-- SELECT "Chords".chordname
-- FROM "Chords" 
-- INNER JOIN "Key_Chords"
-- 	ON "Key_Chords".chordid = "Chords".id
-- INNER JOIN "MusicalKeys"
-- 	ON "Key_Chords".keyid = "MusicalKeys".id
-- WHERE "MusicalKeys".keyname = 'C';

/* Updated query*/
SELECT "Chords".chordname
FROM "Chords" 
INNER JOIN "Key_Chords"
	ON "Key_Chords"."ChordId" = "Chords".id
INNER JOIN "MusicalKeys"
	ON "Key_Chords"."MusicalKeyId" = "MusicalKeys".id
WHERE "MusicalKeys".keyname = 'F#';




SELECT CONCAT ("Chords".chordname,'+') 
FROM "Chords" 
INNER JOIN "Key_Chords"
	ON "Key_Chords".chordid = "Chords".id
INNER JOIN "MusicalKeys"
	ON "Key_Chords".keyid = "MusicalKeys".id
WHERE "MusicalKeys".keyname = 'E';


SELECT "Scales".scalename 
FROM "Scales" 
INNER JOIN "Key_Scales"
	ON "Key_Scales".scaleid = "Scales".id
INNER JOIN "MusicalKeys"
	ON "Key_Scales".keyid = "MusicalKeys".id
WHERE "MusicalKeys".keyname = 'A';
