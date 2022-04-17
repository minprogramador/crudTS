import { Request, Response } from 'express';
import { UserModel } from '../database/models/UserModel';
import {Md5} from "md5-typescript";
class UsuariosController {

    async findAll(req: Request, res: Response) {
        const user = await UserModel.findAll();
        return user.length > 0 ? res.json(user): res.json({msg: 'nada encontrado.'});
    }

    async findOne(req: Request, res: Response) {
        const {id} = req.params;
        const user = await UserModel.findOne({
            where: {
                id: id
            }
        });

        return user ? res.json(user) : res.sendStatus(204);
    }

    async create(req: Request, res: Response) {
        const user = await UserModel.create({
            usuario: req.body.usuario,
            senha: Md5.init(req.body.senha),
            status: req.body.status
        });

        return res.json(user);
    }

    async update(req: Request, res: Response) {
        const {id} = req.params;
        if(req.body.senha.length > 0){
            req.body.senha = Md5.init(req.body.senha);
        }
        let response = await UserModel.update(req.body, {where:{ id: id}})

        return res.send(response);
    }

    async destroy(req: Request, res: Response) {
        const {id} = req.params;
        await UserModel.destroy({where:{id: id}});
        return res.send();

    }


}

export default new UsuariosController();