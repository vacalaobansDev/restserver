require('./config/config');

var express = require('express');
var mongoose = require('mongoose');

var app = express();

var bodyParser = require('body-parser');
var oracledb = require('oracledb');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB, (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});