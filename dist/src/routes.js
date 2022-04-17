"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const UsuariosController_1 = __importDefault(require("./controllers/UsuariosController"));
const router = express_1.default.Router();
exports.router = router;
router.post("/usuarios", UsuariosController_1.default.create);
router.get("/usuarios", UsuariosController_1.default.findAll);
router.get("/usuarios/:id", UsuariosController_1.default.findOne);
router.put("/usuarios/:id", UsuariosController_1.default.update);
router.delete("/usuarios/:id", UsuariosController_1.default.destroy);
