# fretboard-backend
Postgres SQL, JS, MVC

## Backend API calls
### To get keys:

localhost:3005/musicalkeys

Retrieves the 12 keys listed in the MusicalKeys table.

http://localhost:3005/musicalkeys

### To get chord groups for a key:

localhost:3005/chords/:*key*/:*barchord*

The value, *key*, is selected from the front-end dropdown list.  The boolean value, *barchord*, is selected by the front-end radio buttons.

http://localhost:3005/chords/B/true

### To get scales for a key:

localhost:3005/scales/*key*

The value, *key*, is selected from the front-end dropdown list.

http://localhost:3005/scales/G


## CORS cross-scripting issue

A security issue arises with the API on the local host.  To address the issue, on the back-end server (from StackOverflow):

1. Stop the Node.js server.
2. npm install cors --save
3. Add following lines to your server.js

```
    const cors=require("cors");
    const corsOptions ={
       origin:'*', 
       credentials:true,            //access-control-allow-credentials:true
       optionSuccessStatus:200,
    }

    app.use(cors(corsOptions)) // Use this after the variable declaration
```


