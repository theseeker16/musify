/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

var mongoose = require('mongoose');
var schema = mongoose.schema;

var artistSchema = schema({
    name: String,
    description: String,
    image:String
});

module.exports = mongoose.model('Artist',artistSchema);