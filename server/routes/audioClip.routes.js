const express = require("express");
const audioClipCtrl = require("../controllers/audioClipController");
const router = express.Router();

// Manipula las peticiones get a la ruta raiz /, devolviendo el objeto json a traves de la funcion especificada
// Definiendo las rutas de mi proyecto y las funciones de mi controlador ke va a utilizar
/*router.get('/', (req, res) => {
    res.json({ "status": "API REST funciona" });
});*/

// otra implementacion a la funcion anterior un poco mas limpia seria usando la clase Controller
router.get('/', audioClipCtrl.getaudioClips);

// Obtener un empleado a traves de su Id
router.get('/:id', audioClipCtrl.getaudioClipById);

// Insertar Empleado
router.post('/', audioClipCtrl.createaudioClip);

// Editar un empleado
router.put('/:id', audioClipCtrl.updateaudioClip);

// Eliminar un empleado
router.delete('/:id', audioClipCtrl.deleteaudioClip);


module.exports = router;