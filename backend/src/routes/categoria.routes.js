const { Router } = require ("express")
const { getCategorias, postCategoria, getCategoriaId, updateCategoria, deleteCategoria } = require("../controllers/categorias.controllers.js")

const router = Router()

router.get("/", getCategorias)
router.get("/:id", getCategoriaId)
router.post("/", postCategoria)
router.put("/:id", updateCategoria)
router.delete("/:id", deleteCategoria)

module.exports = router
