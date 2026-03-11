let discos = [
  { id: 1, nombre: 'Hybrid Theory', banda: 'Linkin Park', año: 2000 },
  { id: 2, nombre: 'Meteora', banda: 'Linkin Park', año: 2003 }
];

const obtenerDiscos = (req, res) => {
  res.json(discos);
};

const crearDisco = (req, res) => {
  const nuevoDisco = {
    id: discos.length + 1,
    ...req.body
  };
  discos.push(nuevoDisco);
  res.status(201).json(nuevoDisco);
};

module.exports = { obtenerDiscos, crearDisco };