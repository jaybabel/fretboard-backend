# fretboard-backend
Postgres SQL, JS, MVC

## Backend API calls
### To get keys:

localhost:3005/musicalkeys

Retrieves the 12 keys listed in the MusicalKeys table.

http://localhost:3005/musicalkeys

### To get chord groups for a key:

localhost:3005/chords/:*key*/:*barchord*

The value, *key* is selected from the front-end dropdown list.  The boolean value *barchord* is selected by the front-end radio buttons.

http://localhost:3005/chords/B/true

