import {Router, Request, Response, response} from 'express';
import {CreateUserService} from '../../services/user/CreateUserService'

class CreateUserController{
    async handle(req: Request, res: Response){
        //CRIAR VARIAVEIS COM AS INFOS RECEBIDAS
        const {name, email, password} = req.body;

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            name,
            email,
            password
        });
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(user)
    }
    
}
export {CreateUserController};