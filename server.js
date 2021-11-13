const express = require("express");
const app = express();

const methodOverride = require('method-override')
const routes = require('./routes');

//Middleware
// app.use(cookieParser());
app.use(express.static("public"));
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
//app.use(express.urlencoded());


app.use('/musicalkeys', routes.musicalkeys)
app.use('/chords', routes.chords)
// app.get('/keys', function (req, res) {
//     res.send('musical key request in server.js')
// })

app.listen(3005, () => {
    console.log("Server is listening!!!")
});
