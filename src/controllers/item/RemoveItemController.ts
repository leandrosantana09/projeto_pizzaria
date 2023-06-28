import {Request, Response} from 'express';
import {RemoveItemService} from '../../services/item/RemoveItemService'

class RemoveItemController{
    async handle(
        req: Request,
        res: Response
        ){
        //QUERY MELHOR PRA DELETE
        const item_id = req.query.item_id as string

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const removeItemService = new RemoveItemService();

        const item = await removeItemService.execute({
            item_id
        });
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(
            item)
            ;
    }
    
}
export {RemoveItemController};