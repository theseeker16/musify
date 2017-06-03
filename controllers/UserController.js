/**
 * Created by jgm16 on 03/06/2017.
 */
'use strict'

function pruebas(req,res) {
    res.status(200).send({
        message: 'Probando user controller'
    });
}

module.exports = {
  pruebas
};