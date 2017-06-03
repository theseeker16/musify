/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var express = require('express');
var userController = require('../controllers/UserController');

var api = express.Router();

api.get('/probando-controlador',userController.pruebas);

module.exports = api;