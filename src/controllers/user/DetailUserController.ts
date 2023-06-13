import {Request, Response} from 'express';
import {DetailUserService} from '../../services/user/DetailUserService'

class DetailUserController{
    async handle(req: Request, res: Response){

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute();
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(user);
    }
    
}
export {DetailUserController};