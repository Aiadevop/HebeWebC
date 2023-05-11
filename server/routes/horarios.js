const { Router, response } = require('express');
const { check } = require('express-validator');
const { 
    crearHorario, 
    obtenerHorario, 
    obtenerHorarios, 
    actualizarHorario,
    añadirUsuarioAlHorario,
    añadirActividadAlHorario,
    borrarUsuarioDelHorario, 
    borrarHorario } = require('../controllers/horarios.controller');
const { existeHorario} = require('../helpers/db-validators');


const {
    validarCampos,
    validarJWT,
    tieneRole
} = require('../middlewares')

const router = Router();

//{{url}}/api/Horarios

//Obtener todas las Horarios-publico
router.get('/', [
    
],obtenerHorarios);

//Obtener una Horario por id - publico.
router.get('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeHorario),
    validarCampos
],obtenerHorario);

//Crear horario - privado con cualquier persona con token valido.
router.post('/', [
    // validarJWT,
    check('dia', 'El dia es obligatorio.').not().isEmpty(),
    check('desde', 'El desde es obligatorio.').not().isEmpty(),
    check('hasta', 'El hasta es obligatorio.').not().isEmpty(),
    check('sala', 'La sala es obligatorio.').not().isEmpty(),
    check('actividad', 'La actividad es obligatorio.').not().isEmpty(),
    validarCampos

], crearHorario);

//Actualizar -privado-cualquiera con token válido
router.put('/:id',[
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeHorario),
    validarCampos
],actualizarHorario);

//Borrar Horario - Admin
router.delete('/:id', [
    // validarJWT,   
    // tieneRole('ADMIN_ROLE', 'USER_ROLE'),
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeHorario),
    validarCampos
], borrarHorario);

//Añadir usuario al horario
router.put('/usuario/:id',[
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeHorario),
    validarCampos
],añadirUsuarioAlHorario);

//Añadir actividad al horario
router.put('/actividad/:id',[
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeHorario),
    validarCampos
],añadirActividadAlHorario);

//Borrar usuario de la actividad
router.delete('/usuario/:id',[
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeHorario),
    validarCampos
],borrarUsuarioDelHorario)



module.exports = router;