import {Request, Response} from 'express';
import {ListProductService} from '../../services/product/ListProductService'

class ListProductController{
    async handle(req: Request, res: Response){

        const category_id = req.query.category_id as string;
        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const listCategoryService = new ListProductService();

        const list_product = await listCategoryService.execute({
            category_id
        });
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(list_product);
    }
    
}
export {ListProductController}; 