const { Router, response } = require('express');
const { check } = require('express-validator');
const { 
    añadirUsuarioAlaAgenda,
    borrarUsuarioDelHorario,
    borrarUsuarioDelaAgenda 
     } = require('../controllers/agendas.controller');

const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares')

const router = Router();

//Obtener todas las Horarios-publico
// router.get('/', [
    
// ],obtenerHorarios);

//Añadir usuario al horario
router.post('/agenda/:id',[
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
],añadirUsuarioAlaAgenda);


//Borrar usuario de la actividad
router.delete('/agenda/:id',[
    check('id', 'No es un id válido').isMongoId(),
    validarCampos
],borrarUsuarioDelHorario)

//Borrar usuario de la actividad
router.delete('/agenda/',[
    check('usuario', 'No es un id válido').isMongoId(),
    validarCampos
],borrarUsuarioDelaAgenda)


module.exports = router;