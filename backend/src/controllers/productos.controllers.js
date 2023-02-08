const { Productos } = require("../db.js");

const getProductos = async (req, res) => {
  try {
    const data = await Productos.findAll();
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getProductoId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Productos.findOne({ where: { id } });
    if (!data)
      return res
        .status(404)
        .json({ message: "el producto con ese Id no existe" });
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const postProducto = async (req, res) => {
  const { nombre, img, precio, color, talla, marca, stock, categoria } =
    req.body;
  try {
    const data = await Productos.findOrCreate({
      where: { nombre },
      defaults: { img, precio, color, talla, marca, stock },
    });
    await data[0].setCategoria(categoria);
    res.json(data[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProducto = async (req, res) => {
  const { nombre, img, precio, color, talla, marca, stock, categoria } =
    req.body;
  const { id } = req.params;
  try {
    if(categoria) {
      await pokemonActual[0].setTipos([]); 
      const producto = await Productos.findByPk(id);
      await producto.setCategoria(categoria);
    }
    const data = await Productos.update(
      {
        nombre,
        img,
        precio,
        color,
        talla,
        marca,
        stock,
      },
      { where: { id } }
    );
    if (data[0] === 0)
      return res
        .status(404)
        .json({ message: "el producto con ese Id no existe" });
    res.json({ message: "producto actualizado" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Productos.findByPk(id);
    if (!data)
      return res
        .status(404)
        .json({ message: "el producto con ese Id no existe" });
    data.destroy();
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductos,
  getProductoId,
  postProducto,
  updateProducto,
  deleteProducto,
};
