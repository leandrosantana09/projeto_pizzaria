import {Request, Response} from 'express';
import {DetailUserService} from '../../services/user/DetailUserService'

class DetailUserController{
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute({user_id});
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(user);
    }
    
}
export {DetailUserController};