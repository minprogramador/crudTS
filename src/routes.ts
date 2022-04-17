import express from 'express';
import UsuariosController from './controllers/UsuariosController';

const router = express.Router();

router.post("/usuarios", UsuariosController.create);
router.get("/usuarios", UsuariosController.findAll);
router.get("/usuarios/:id", UsuariosController.findOne);
router.put("/usuarios/:id", UsuariosController.update);
router.delete("/usuarios/:id", UsuariosController.destroy);

export { router };