/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var express = require('express');
var cloudinary = require('cloudinary');
var userController = require('../controllers/UserController');

var api = express.Router();
var md_auth = require('../middleware/Authenticated');
api.use(require('../middleware/Cloudinary').config);
//Multiparty modulo que permite subir o enviar ficheros por el protocolo http

var multipart = require('connect-multiparty');
var md_upload = multipart();


api.get('/probando-controlador',md_auth.ensureAuth,userController.pruebas);
api.post('/register',userController.saveUser);
api.post('/login',userController.loginUser);
api.put('/updateUser/:id',md_auth.ensureAuth,userController.updateUser);
api.post('/uploadImage/:id',[md_auth.ensureAuth,md_upload],userController.uploadImage);
api.get('/getImage/:image',userController.getImage);

module.exports = api;