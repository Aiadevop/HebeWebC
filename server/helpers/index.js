const dbValidators  = require ('./db-validators');
const generarJWT    = require ('./generarJWT');
<<<<<<< HEAD

=======
const subirArchivo  = require ('./subir-archivo');
>>>>>>> refs/remotes/origin/conexion-BD

module.exports = {
    ...dbValidators,
    ...generarJWT,
<<<<<<< HEAD
 
=======
    ...subirArchivo
>>>>>>> refs/remotes/origin/conexion-BD
}