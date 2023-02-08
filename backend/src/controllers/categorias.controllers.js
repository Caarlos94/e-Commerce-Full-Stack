const { Categorias } = require("../db.js");

const getCategorias = async (req, res) => {
  try {
    const data = await Categorias.findAll();
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

const getCategoriaId = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Categorias.findOne({ where: { id } });
    if (!data)
      return res
        .status(404)
        .json({ message: "la categoria con ese Id no existe" });
    res.json(data);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

const postCategoria = async (req, res) => {
  const { nombre } = req.body;
  try {
    const data = await Categorias.findOrCreate({ where: { nombre } });
    res.json({
      id: data[0].dataValues.id,
      nombre,
    });
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

const updateCategoria = async (req, res) => {
  const { nombre } = req.body;
  const { id } = req.params;
  try {
    const data = await Categorias.update({ nombre }, { where: { id } });
    if (data[0] === 0)
      return res
        .status(404)
        .json({ message: "la categoria con ese Id no existe" });
    res.json({ message: "categoria actualizada" });
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Categorias.findByPk(id);
    if (!data)
      return res
        .status(404)
        .json({ message: "la categoria con ese Id no existe" });
    data.destroy();
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "something goes wrong" });
  }
};

module.exports = {
  getCategorias,
  postCategoria,
  getCategoriaId,
  updateCategoria,
  deleteCategoria,
};
