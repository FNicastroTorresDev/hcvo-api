// Crear rutas de autenticación para login.

// Crear ruta de autenticación con el método post. 
// En el controlador del post del login realizar la comparación de bcrypt

import { Router } from "express";
import { authentication } from "../controllers/login.controllers.js";

const router = Router()

router
  .post('/', authentication)

export default router