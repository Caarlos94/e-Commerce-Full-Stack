const { Router } = require("express")
const { getProductos, getProductoId, postProducto, updateProducto, deleteProducto } = require("../controllers/productos.controllers.js")

const router = Router()

router.get("/", getProductos)
router.get("/:id", getProductoId)
router.post("/", postProducto)
router.patch("/:id", updateProducto)
router.delete("/:id", deleteProducto)

module.exports = router