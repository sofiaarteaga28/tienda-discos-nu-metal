const express = require('express');
const { obtenerDiscos, crearDisco, actualizarDisco, eliminarDisco } = require('../controllers/discosController');

const router = express.Router();

router.get('/', obtenerDiscos);
router.post('/', crearDisco);
router.put('/:id', actualizarDisco);
router.delete('/:id', eliminarDisco);

module.exports = router;