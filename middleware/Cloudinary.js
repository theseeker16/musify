/**
 * Created by jgm16 on 07/06/2017.
 */
'use stric'

var cloudinary = require('cloudinary');

module.exports = {
    config: (req, res, next) => {
        cloudinary.config({
            cloud_name: 'dyrbasjmi',
            api_key: '811946786153829',
            api_secret: 'zK7kjf2PB7a-3n3i8GjkUvL4Ru4'
        });
        req.cloudinary = cloudinary;
        next();
    },
}