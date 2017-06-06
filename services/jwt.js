/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var jwt = require('jwt-simple');
//Moment: guarda el objeto codificado dentro de un token
var moment = require('moment');
var secret = 'clave_secreta_proyecto';

exports.createToken = function(user){
  var payload = {
    sub: user._id,
      name:user.name,
      surname: user.surname,
      email: user.email,
      role: user.role,
      image: user.image,
      iat: moment().unix(),
      exp: moment().add(30,'days').unix
  };
  return jwt.encode(payload, secret);

};