/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

//Carga el modulo de mongoose
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var songSchema = schema({
    number: String,
    name: String,
    duration: String,
    file: String,
    album: {type: schema.ObjectId,ref:'Album'}
});

module.exports = mongoose.model('Song',songSchema);