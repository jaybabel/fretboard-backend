const express = require("express");
const app = express();

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
//app.use(express.urlencoded());


app.use('/musicalkeys', routes.musicalkeys)
app.use('/chords', routes.chords)
app.use('/scales', routes.scales)
// app.get('/keys', function (req, res) {
//     res.send('musical key request in server.js')
// })

app.listen(3005, () => {
    console.log("Server is listening!!!")
});
