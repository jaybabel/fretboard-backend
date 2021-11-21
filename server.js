require('dotenv').config();

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const methodOverride = require('method-override')
const routes = require('./routes');

// cors issue
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
// end cors code

//Middleware
// app.use(cookieParser());
app.use(express.static("public"));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
//app.use(express.urlencoded());


app.use('/musicalkeys', routes.musicalkeys)
app.use('/chords', routes.chords)
app.use('/scales', routes.scales)
app.use('/user', routes.user_accounts)
app.use('/signup', routes.user_accounts)
app.use('/user_recordings', routes.user_recordings)

// app.use('/signup', function (req, res) {
//     res.send('user_accounts request in server.js')
// })

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})