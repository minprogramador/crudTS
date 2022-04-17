"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = require("../database/models/UserModel");
const md5_typescript_1 = require("md5-typescript");
class UsuariosController {
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.UserModel.findAll();
            return user.length > 0 ? res.json(user) : res.json({ msg: 'nada encontrado.' });
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield UserModel_1.UserModel.findOne({
                where: {
                    id: id
                }
            });
            return user ? res.json(user) : res.sendStatus(204);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield UserModel_1.UserModel.create({
                usuario: req.body.usuario,
                senha: md5_typescript_1.Md5.init(req.body.senha),
                status: req.body.status
            });
            return res.json(user);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (req.body.senha.length > 0) {
                req.body.senha = md5_typescript_1.Md5.init(req.body.senha);
            }
            let response = yield UserModel_1.UserModel.update(req.body, { where: { id: id } });
            return res.send(response);
        });
    }
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield UserModel_1.UserModel.destroy({ where: { id: id } });
            return res.send();
        });
    }
}
exports.default = new UsuariosController();
