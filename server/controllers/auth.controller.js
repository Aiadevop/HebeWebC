const { response } = require('express');
const bcryptjs = require('bcryptjs')

const Usuario = require('../models/usuario');

const { generarJWT } = require('../helpers/generarJWT');
const { buscarUsuarios } = require('./buscar.controller');
const { Agenda, Horario, Actividad } = require('../models');

const login = async (req, res = response) => {

    const { correo, password } = req.body;
    const url = 'http://localhost:8080/'
    let horarioUsuario = []
    let totalPrecio = 0
    let dia = " "
    let desde= " "
    let hasta= " "
    let nombreActividad = " "
    let precio = " "

    try {

        // Verificar si el email existe
        const usuario = await Usuario.findOne({ correo });
        const idUser = usuario._id
        console.log("idUser: " + idUser)
        if (idUser) {
            let agendas = await Agenda.find({ "usuario": idUser })
            console.log("AGENDA " + agendas)
            for (let i = 0; i < agendas.length; i++) {
                const horarioId = agendas[i].horario;
                console.log("horarioId: " + horarioId)
                let horarioAgenda = await Horario.findById({ "_id": horarioId })
                console.log("horarioAgenda: "+ horarioAgenda)
                if(horarioAgenda){
                    console.log(horarioAgenda.dia)
                    console.log(horarioAgenda.desde)
                    console.log(horarioAgenda.hasta)
                    dia= horarioAgenda.dia
                    desde = horarioAgenda.desde
                    hasta = horarioAgenda.hasta        
                }
                const idActividad = horarioAgenda.actividad.toString()
                console.log("idActividad: " + idActividad)
                let actividad = await Actividad.findById({ "_id": idActividad })
                if (!actividad) {
                    console.log("la actividad no existe")
                } else {
                    console.log("Actividad: " + actividad)
                    console.log(actividad.actividad)
                    console.log(actividad.precio)
                    nombreActividad = actividad.actividad
                    precio = actividad. precio                
                }
                console.log(dia+ " "+ desde+ " "+ hasta+  " "+ nombreActividad+ " "+ precio)
                horarioUsuario += "{ "+dia+ " "+ desde+ " - "+ hasta+  " "+ nombreActividad+ " "+ precio +"€ }"+ "  <br/> "
                console.log(horarioUsuario)
                totalPrecio += precio
                console.log(totalPrecio)
            }
        }

        if (!usuario) {
            return res.status(400).json({
                message: 'Usuario / Password no son correctos - correo'
            });
        }

        // SI el usuario está activo
        if (usuario.estado === false) { //!usuario.estado
            return res.status(400).json({
                message: 'Usuario / Password no son correctos - estado: false'
            });
        }

        // Verificar contraseña
        const contraseñaValida = bcryptjs.compareSync(password, usuario.password)
        if (!contraseñaValida) {
            return res.status(400).json({
                message: 'Usuario / Password no son correctos - contraseña'
            });
        }

        //Generar el JWT
        const token = await generarJWT(usuario.id);



        res.status(200).json({
            message: 'Login ok',
            usuario,
            nombre: usuario.nombre,
            dni: usuario.dni,
            telefono: usuario.telefono,
            correo: usuario.correo,
            horarioUsuario,
            totalPrecio,
            token
        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Hable con el administrador'
        });
    }

}

module.exports = {
    login,

}