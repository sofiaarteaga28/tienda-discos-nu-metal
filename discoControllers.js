const { v4: uuidv4 } = require('uuid');

let discos = [
  { id: uuidv4(), nombre: 'Hybrid Theory', banda: 'Linkin Park', año: 2000 },
  { id: uuidv4(), nombre: 'Meteora', banda: 'Linkin Park', año: 2003 }
];

const obtenerDiscos = (req, res) => {
  res.json(discos);
};

const crearDisco = (req, res) => {
  const { nombre, banda, año } = req.body;

  // Validaciones
  if (!nombre || nombre.trim() === '') {
    return res.status(400).json({ error: 'El nombre del disco es requerido' });
  }
  if (!banda || banda.trim() === '') {
    return res.status(400).json({ error: 'La banda es requerida' });
  }
  if (!año || isNaN(año) || año < 1900 || año > new Date().getFullYear()) {
    return res.status(400).json({ error: 'El año debe ser válido' });
  }

  const nuevoDisco = {
    id: uuidv4(),
    nombre: nombre.trim(),
    banda: banda.trim(),
    año
  };
  discos.push(nuevoDisco);
  res.status(201).json(nuevoDisco);
};

const actualizarDisco = (req, res) => {
  const { id } = req.params;
  const index = discos.findIndex(disco => disco.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Disco no encontrado' });
  }
  
  discos[index] = { id, ...req.body };
  res.json(discos[index]);
};

const eliminarDisco = (req, res) => {
  const { id } = req.params;
  const index = discos.findIndex(disco => disco.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Disco no encontrado' });
  }
  
  const discoEliminado = discos.splice(index, 1);
  res.json({ mensaje: 'Disco eliminado', disco: discoEliminado[0] });
};

module.exports = { obtenerDiscos, crearDisco, actualizarDisco, eliminarDisco };