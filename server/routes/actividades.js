const { Router, response } = require('express');
const { check } = require('express-validator');
const { 
    crearActividad, 
    obtenerActividad, 
    obtenerActividades, 
    actualizarActividad, 
    borrarActividad } = require('../controllers/actividades.controller');
const { existeActividad} = require('../helpers/db-validators');


const {
    validarCampos,
    validarJWT,
    tieneRole,
    validarHorario
} = require('../middlewares');

const router = Router();

//{{url}}/api/Actividades

//Obtener todas las Actividades-publico
router.get('/', [
    
],obtenerActividades);

//Obtener una Actividad por id - publico.
router.get('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeActividad),
    validarCampos
],obtenerActividad);

//Crear Actividad - privado con cualquier persona con token valido.
router.post('/', [
    validarJWT,
    check('actividad', 'El nombre de la actividad es obligatorio.').not().isEmpty(),
    validarHorario,
    check('horario', 'El horario es obligatoria.').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria.').not().isEmpty(),
    validarCampos
], crearActividad);

//Actualizar -privado-cualquiera con token válido
router.put('/:id',[
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeActividad),
    validarCampos
],actualizarActividad);

//Borrar Actividad - Admin
router.delete('/:id', [
    validarJWT,   
    tieneRole('ADMIN_ROLE', 'VENTAS_ROLE'),
    check('id', 'No es un id válido').isMongoId(),
    check ('id').custom(existeActividad),
    validarCampos
], borrarActividad);



module.exports = router;