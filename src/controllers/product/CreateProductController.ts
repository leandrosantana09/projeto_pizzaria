import {Request, Response} from 'express';
import {CreateProductService} from '../../services/product/CreateProductService'
import { error } from 'console';

class CreateProductController{
    async handle(req: Request, res: Response){
        //CRIAR VARIAVEIS COM AS INFOS RECEBIDAS
        const {name, price, description, category_id} = req.body;

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const createProductService = new CreateProductService();

        if(!req.file){
            throw new error("erro upload file")
        }else{

            const {originalname, filename: banner} = req.file;

            const product = await createProductService.execute({
                name,
                price,
                description,
                banner,
                category_id
            });
        
            //RETORNA PARA O USUARIO
            //O BANCO JA FOI CADASTRADO
            return res.json(product)
        }
    }
    
}
export {CreateProductController};