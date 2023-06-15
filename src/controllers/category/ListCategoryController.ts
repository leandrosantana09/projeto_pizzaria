import {Request, Response} from 'express';
import {ListCategoryService} from '../../services/category/ListCategoryService'

class ListCategoryController{
    async handle(req: Request, res: Response){

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const listCategoryService = new ListCategoryService();

        const category = await listCategoryService.execute();
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(category);
    }
    
}
export {ListCategoryController};