/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/User');
var jwt = require('../services/jwt');

function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando user controller'
    });
}
function saveUser(req, res) {
    var user = new User();

    var params = req.body;

    user.name = params.name;
    user.surname = params.surname;
    user.email = params.email;
    user.role = 'ROLE_ADMIN';
    user.image = 'null';

    if (params.password) {
        //encriptar contraseña
        bcrypt.hash(params.password, null, null, function (err, hash) {
            user.password = hash;
            if (user.name != null && user.surname != null && user.email != null) {
                //Guardar el usuario
                user.save((err, userStored) => {
                    if (err) {
                        res.status(500).send({message: 'Error al guardar el usuario'});
                    } else {
                        if (!userStored) {
                            res.status(400).send({message: 'No se ha registrado el usuario'});
                        } else {
                            res.status(200).send({user: userStored});
                        }
                    }
                });

            } else {
                res.status(200).send({message: 'Introduce todos los campos'});
            }
        });
    } else {
        res.status(200).send({message: 'Introduce la contraseña'});
    }

}

function loginUser(req, res) {
    var params = req.body;
    var email = params.email;
    var password = params.password;

    User.findOne({email: email.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500).send({message: 'Error en la peticion'});
        } else {
            if (!user) {
                res.status(400).send({message: 'El usuario no existe'});
            } else {
                //comprobar contraseña
                bcrypt.compare(password, user.password, function (err, check) {
                    if (check) {
                        //Devuelve los datos del usuario si el check es correcto
                        if (params.gethash) {
                            //devolver un token jwt
                            res.status(200).send({
                                token: jwt.createToken(user)
                            });
                        } else {
                            res.status(200).send({user})
                        }
                    } else {
                        res.status(400).send({message: 'Contraseña incorrecta'});
                    }
                });

            }
        }
    });
}

module.exports = {
    pruebas, saveUser, loginUser
};