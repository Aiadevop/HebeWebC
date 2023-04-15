const { Horario } = require('../models');
const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Actividad = require('../models/actividad');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD.`)
    }

    return true;
}

const emailExiste = async(correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}}, ya está registrado en la BD.`)
    }

    return true;
}

const idExiste = async(id) => {

    const existeid = await Usuario.findById(id);
    if (!existeid) {
        throw new Error(`El id: ${id}, no existe en la BD.`)
    }

    return true;
}

const existeHorario = async(id) => {

    const existeHorario = await Horario.findById(id);    
    if (!existeHorario) {
        throw new Error(`Este id de horario: ${id}, no existe en la BD.`)
    }
    console.log('El horario ',id, ' existe.');
    if(Usuario.estado===false){
        throw new Error(`El horario con id: ${id}, ya no existe en la BD.`)
    }

    return true;
}

const existeActividad = async(id) => {

    const existeActividad = await Actividad.findById(id);    
    if (!existeActividad) {
        throw new Error(`Este id de actividad: ${id}, no existe en la BD.`)
    }
    if(Actividad.estado===false){
        throw new Error(`La actividad con id: ${id}, ya no existe en la BD.`)
    }

    return true;
}

//Validar colecciones permitidas

const coleccionesPermitidas = (coleccion ='', colecciones =[])=>{
    const incluida = colecciones.includes(coleccion);
    if(!incluida){
        throw new Error (`La colección ${coleccion} no está permitida, ${colecciones} `)
    }

    return true;
}



module.exports = {
    esRoleValido,
    emailExiste,
    idExiste,
    existeHorario,
    existeActividad,
    coleccionesPermitidas
   
};