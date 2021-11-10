CREATE TABLE key_chord (
	musicalkey_id INTEGER REFERENCES musicalkey(id) ON DELETE CASCADE,
	chord_id INTEGER REFERENCES chords(id) ON DELETE CASCADE,
	PRIMARY KEY (chord_id, musicalkey_id)
);


CREATE TABLE key_scale (
	musicalkey_id INTEGER REFERENCES musicalkey(id) ON DELETE CASCADE,
	scale_id INTEGER REFERENCES scales(id) ON DELETE CASCADE,
	PRIMARY KEY (scale_id, musicalkey_id)
);


CREATE TABLE user_recording (
	user_id INTEGER REFERENCES user_account(id) ON DELETE CASCADE,
	recording_id INTEGER REFERENCES recordings(id) ON DELETE CASCADE,
	PRIMARY KEY (user_id, recording_id)
);