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
app.use((req,res,next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,X-XSRF-TOKEN,Access-Control-Allow-Request-Method');
   res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
   res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');

   next();
});

app.use('/api', user_routes);
module.exports = app;