require('./config/config');

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

/* const hbs = require('hbs'); */

// Helper para registrar funciones y hacer uso de estas sin pasar o enviar parametros
/* require('./hbs/helpers');

const port = process.env.port || 3000;

app.use(express.static(__dirname + '/public')); */

// para uso de contenido dinamico
/* hbs.registerPartials(__dirname + '/views/partiales');
app.set('view engine', 'hbs'); */


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    //Que renderice con el HandleBars 
    //let body = req.body;
    res.json('hola mundo');
});

app.post('/usuario', function(req, res) {
    //Que renderice con el HandleBars 
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {

        res.json({
            persona: body
        });

    }


});

app.put('/usuario:id', function(req, res) {
    //Que renderice con el HandleBars home e utilice la variable anio que es una fecha dinamica
    let id = req.params.id;
    //let body = req.body;
    res.json({
        id: id
    });
});

app.delete('/usuario', function(req, res) {
    //Que renderice con el HandleBars home e utilice la variable anio que es una fecha dinamica
    //let body = req.body;
    res.json('hola mundo');
});

/* app.get('/about', function(req, res) {
    //Que renderice con el HandleBars home e utilice la variable anio que es una fecha dinamica
    res.render('about');
}); */

app.listen(process.env.PORT, () => {
    console.log('Escuchando peticiones en el puerto ', process.env.PORT);
});