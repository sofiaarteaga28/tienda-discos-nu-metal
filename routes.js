const express = require('express');
const { obtenerDiscos, crearDisco } = require('../controllers/discosController');

const router = express.Router();

router.get('/', obtenerDiscos);
router.post('/', crearDisco);

module.exports = router;