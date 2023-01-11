// Rutas para producto
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/clienteController');

router.get('/',  usuarioController.obtenerUsuarios);
router.get('/:id',  usuarioController.obtenerUsuario);
router.put('/:id',  usuarioController.actualizarUsuario);
router.post('/',  usuarioController.crearUusario);
router.delete('/:id',  usuarioController.eliminarUsuario);

module.exports = router;