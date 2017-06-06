/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas

var user_routes = require('./routes/UserRoute');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras http

// rutas base

/**
 * Utiliza un Middleware
 * Para utilizar todo por API
 */
app.use('/api', user_routes);



app.get('/pruebas',function (req,res) {
    res.status(200).send({message:"Probando proyecto"});
});
module.exports = app;