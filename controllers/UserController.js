/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'


var bcrypt = require('bcrypt-nodejs');
var User = require('../models/User');
var jwt = require('../services/jwt');
var cloudinary = require('cloudinary');


function pruebas(req, res) {
    res.status(200).send({
        message: 'Probando user controller'
    });
}
function saveUser(req, res) {
    var user = new User();

    var params = req.body;
    console.log(params);
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

function updateUser(req, res) {
    var userId = req.params.id;
    var update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error al actualizar el usuario'});
        } else {
            if (!userUpdated) {
                res.status(404).send({message: 'No se ha podido actualizar el usuario'});
            } else {
                res.status(200).send({user: userUpdated});
            }
        }
    });
}

function uploadImage(req, res) {
    var userId = req.params.id;
    var file_name = 'No subido';

    //files es de connect
    if (req.files) {
        var file_path = req.files.image.path;


        //Obtiene la extension de la imagen
        var ext_split = file_path.split('.');
        var file_ext = ext_split.pop();
        console.log(file_ext);

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif' || file_ext == 'jpeg') {
            req.cloudinary.uploader.upload(file_path, function (image) {

                //Obtiene el nombre de la imagen de cloudinary
                var file_split = image.url.replace(/^.*[\\\/]/, '');
                var file_name = file_split;

                User.findByIdAndUpdate(userId, {image: file_name}, (err, userUpdated) => {
                    if (!userUpdated) {
                        res.status(404).send({message: 'No se ha podido actualizar el usuario'});
                    } else {
                        res.status(200).send({message: "Upload image to cloudinary"});
                    }
                });
            });
        } else {
            res.status(200).send({message: 'Extension del archivo no valida'});
        }
    } else {
        res.status(200).send({message: 'No has subido ningun imagen'});
    }

}

function getImage(req,res){
    var image = cloudinary.image(req.params.image)
    console.log(image);
}

module.exports = {
    pruebas, saveUser, loginUser, updateUser, uploadImage,getImage
};