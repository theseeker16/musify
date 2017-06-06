/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var express = require('express');
var userController = require('../controllers/UserController');

var api = express.Router();
var md_auth = require('../middleware/Authenticated');

//Multiparty modulo que permite subir o enviar ficheros por el protocolo http
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/users'})

api.get('/probando-controlador',md_auth.ensureAuth,userController.pruebas);
api.post('/register',userController.saveUser);
api.post('/login',userController.loginUser);
api.put('/updateUser/:id',md_auth.ensureAuth,userController.updateUser);
api.post('/uploadImage/:id',[md_auth.ensureAuth,md_upload],userController.uploadImage)

module.exports = api;