import {Request, Response} from 'express';
import {CreateCategoryService} from '../../services/category/CreateCategoryService'

class CreateCategoryController{
    async handle(req: Request, res: Response){
        //CRIAR VARIAVEIS COM AS INFOS RECEBIDAS
        const {name} = req.body;

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({
            name
        });
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(category);
    }
    
}
export {CreateCategoryController};