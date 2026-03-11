const express = require('express');
const discosRoutes = require('./routes/discos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/discos', discosRoutes);

app.listen(PORT, () => {
  console.log(`🎸 Servidor corriendo en puerto ${PORT}`);
});