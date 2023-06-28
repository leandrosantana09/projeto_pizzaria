import {Request, Response} from 'express';
import {CreateItemService} from '../../services/item/CreateItemService'

class CreateItemController{
    async handle(
        req: Request,
        res: Response
        ){
        //CRIAR VARIAVEIS COM AS INFOS RECEBIDAS
        const {
            order_id,
            product_id,
            amount
        } = req.body;

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const createItemService = new CreateItemService();

        const item = await createItemService.execute({
            order_id,
            product_id,
            amount
        });
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(
            item
            );
    }
    
}
export {CreateItemController};