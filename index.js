/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/musify',(err,res) => {
    if(err){
        throw err;
    }else{
        console.log("La conexion a la base de datos esta funcionando correctamente..");
        app.listen(port,function () {
           console.log("Servidor del api rest de musify escuchando en http:")
        });
    }
});
