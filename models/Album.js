/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

//Cargar el mongose
var mongoose = require('mongoose');
//Carga el schema
var schema = mongoose.Schema;

var albumSchema = schema({
    name: String,
    description: String,
    year: Number,
    image: String,
    artist: { type: schema.ObjectId, ref: 'Artist'}
});

module.exports = mongoose.model('Album',albumSchema);