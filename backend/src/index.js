const express = require('express');
const rutaCategorias = require('./routes/categoria.routes.js');
const rutaProductos = require('./routes/producto.routes.js');

const app = express();

app.use("/categorias", rutaCategorias)
app.use("/productos", rutaProductos);

module.exports = app;