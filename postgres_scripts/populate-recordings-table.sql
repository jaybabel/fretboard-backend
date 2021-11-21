INSERT INTO "User_Recordings" (id, recordingname, recordingurl, "userId", memo) 
VALUES (1, 'E-A-D-A-E', './Downloads/E-A-D-A-E-progression.mp3', 2, 'Open chords progression from E to A to D to A to E');

INSERT INTO "User_Recordings" (id, recordingname, recordingurl, "userId", memo) 
VALUES (2, 'Wish You Were Here', './Downloads/WishYouWereHere.mp3', 2, 'Opening riff to Pink Floyd Wish You Were Here.');


UPDATE "User_Recordings"
SET imageurl = 'https://fretboard-mp3s.s3.us-east-2.amazonaws.com/E-A-D-A-E-progression.mp3'
WHERE id = 1;

UPDATE "User_Recordings"
SET imageurl = 'https://fretboard-mp3s.s3.us-east-2.amazonaws.com/WishYouWereHere.mp3'
WHERE id = 2;