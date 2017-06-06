/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_proyecto';

//Recibe todos los parametros o peticion http
exports.ensureAuth = function (req,res,next) {
    //Recoger autorizacion,pasar el token por un header
    //verifica si el header esta creado
    if(!req.headers.authorization){
        return res.status(403).send({message:'La peticion no tiene el header de autentificacion'});
    }
    //Elimina las comillas
    var token = req.headers.authorization.replace(/['"]+/g, '');

    try{
        //decofica el token
       var payload = jwt.decode(token, secret);

       if(payload.exp <= moment().unix()){
           return res.status(401).send({message:'El token ha expirado'});
       }
    }catch(ex){
        return res.status(404).send({message:'Token no es valido'});

    }
    req.user = payload;

    //Sale del middleware
    next();
};