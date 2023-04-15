const { response, json } = require("express");
const { Horario } = require("../models");
const horario = require("../models/horario");
const mongoose = require('mongoose');
const { Schema } = mongoose;

//obtenerHorarios - paginado - nºHorarios - metodo populate

const obtenerHorarios = async (req, res=response) =>{

    const { limite = 5, desde = 0 } = req.query;
    const cat = Horario.find({ estado: true })
        .populate('usuario','nombre')
        .skip(Number(desde))
        .limit(Number(limite));
    const tot = Horario.countDocuments({ estado: true });
    
    const [total, horarios] = await Promise.all([
        tot,
        cat        
    ])

    res.status(200).json({
        total,
        horarios          
    })
}

//obtenerHorario- populate {}

const obtenerHorario = async (req, res=response) =>{
    const {id} = req.params;
    const horario = await Horario.findById(id).populate('usuario');
   
    res.status(200).json({
        horario
    })
    
}

const crearHorario = async (req, res=response) => {

    const horario = req.body.horario.toUpperCase();

    const horarioDB = await Horario.findOne({horario})

    if(horarioDB){
        res.status(400).json({
            msg: `El horario ${horario} ya existe`
        })
        return
    };

    const data = {
        horario,
        usuario: req.usuario._id
    }
    console.log(data);

    const horariox = new Horario (data);
    console.log(horariox);
    await horariox.save(horariox);
    res.status(201).json(data);
}

//ActualizarHorario - recibir el nombre

const actualizarHorario = async (req, res=response) =>{
  
    const { id } = req.params;
    const { usuario, estado, ...resto } = req.body;
    console.log(resto,'Hola');

    resto.horario  = resto.horario.toUpperCase();
      
    //encuentra una horario y lo actualiza
    const horarios = await Horario.findByIdAndUpdate(id,resto, {new:true});
    //con eso se mira en la respuesta la nueva información
    console.log(horarios);

    res.status(400).json({
        horarios
    })
}

//BorrarHorario - estado false

const borrarHorario = async (req, res=response) =>{

    const { id } = req.params;

    const {horario} = await Horario.findByIdAndUpdate(id, { estado: false });

    res.json({
        "Horario borrado": horario
    })
    
}

module.exports = {
    actualizarHorario,
    borrarHorario,
    crearHorario,
    obtenerHorario,
    obtenerHorarios,    
    
}