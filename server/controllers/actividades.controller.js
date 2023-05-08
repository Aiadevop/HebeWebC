const { response, json } = require("express");
const { Actividad } = require("../models");
const mongoose = require('mongoose');
const actividad = require("../models/actividad");
const { Schema } = mongoose;

//obtenerActividades - paginado - nºactividades - metodo populate

const obtenerActividades = async (req, res = response) => {

    const act = await Actividad.find()

    res.status(200).json({
        act
    })
}

//obtenerActividad- populate {}

const obtenerActividad = async (req, res = response) => {
    const { id } = req.params;
    const actividad = await Actividad.findById(id);
    if (!actividad) {
        res.status(400).json({
            msg: `El id de esta actividad no existe.`
        })
        return;
    }
    res.status(200).json({
        actividad
    })

}

const crearActividad = async (req, res = response) => {

    const { precio } = req.body;
    const actividad = req.body.actividad.toUpperCase();

    const actividadDB = await Actividad.findOne({ actividad })


    if (actividadDB) {
        res.status(400).json({
            msg: `La actividad ya existe en la BD`
        })
        return
    };
    const data = {
        actividad,
        precio
    }


    const actividadx = new Actividad(data);
    await actividadx.save(actividadx);
    res.status(200).json(data);
}


//Actualizaractividad - recibir el nombre

const actualizarActividad = async (req, res = response) => {

    const { id } = req.params;
    const { ...resto } = req.body;
    if(resto.actividad){
        resto.actividad = resto.actividad.toUpperCase();
    }

    //encuentra una actividad y lo actualiza
    const actividades = await Actividad.findByIdAndUpdate(id, resto);

    res.status(400).json({
        "Actividad actualizada":actividades.actividad
    })
}

//BorrarActividad - estado false

const borrarActividad = async (req, res = response) => {

    const { id } = req.params;

    const { actividad } = await Actividad.findByIdAndDelete(id);

    res.json({
        "Actividad borrada": actividad
    })

}



module.exports = {
    actualizarActividad,
    borrarActividad,
    crearActividad,
    obtenerActividad,
    obtenerActividades


}