import {Router} from "express";
import { methodHTTP as categoriasController} from "../controllers/categorias.controllers.js";
//creamos un enrutador
const router = Router();

//configuramos respuesta desde server metodo http get
router.get("/", categoriasController.getCategorias); // para crud - read
router.post("/", categoriasController.postCategorias); // para crud - create

//Ruta que recibe un parametro
router.get("/:id", categoriasController.getCategory); //para crud - read 1 sola fila 

//Ruta que recibe parametro id de categoria a borrar
router.delete("/:id", categoriasController.deleteCategory); //para crud - delete 1 sola fila 

// Ruta que recibe como parametro tanto el cuerpo del id a actualizar
router.put("/:id", categoriasController.updateCategorias); //para crud - delete 1 sola fila 

//hacemos disponible a router en toda la app
export default router;