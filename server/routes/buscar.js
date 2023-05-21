const { Router } = require ('express');
const { buscar, buscarResto } = require('../controllers/buscar.controller');

const router = Router();

// router.get('/:coleccion', [
router.get('/:coleccion', [
    
],buscar);

// router.get('/:coleccion/:termino', [
router.get('/:coleccion/:termino', [
    
],buscarResto);


module.exports = router;