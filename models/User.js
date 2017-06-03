/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var mongoose = require('mongoose');
var schema = mongoose.schema;

var userSchema = schema({
     name: String,
     surName: String,
     email: String,
     password: String,
     role: String,
     image: String
});

module.exports = mongoose.model('User',userSchema);