# fretboard-backend
Postgres SQL, JS, MVC

Backend hosted on Heroku.

Frontend README https://github.com/jaybabel/fretboard-frontend/blob/main/README.md

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

### User account APIs

post(`${BASE_URL}/user/signup`, data)

post(`${BASE_URL}/user/changePassword/${e.target[0].value}/${e.target[2].value}`)

post(`${BASE_URL}/user/delete/${e.target[0].value}`)

.post(`${BASE_URL}/user/login`, data)

### User recording APIs

.get(`${BASE_URL}/user_recordings`)

axios.post(`${BASE_URL}/user_recordings/getRecordingData`, {recordingname:data} )


### AWS S3 for images

https://fretboard-images.s3.us-east-2.amazonaws.com/

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


