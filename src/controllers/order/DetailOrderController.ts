import {Request, Response} from 'express';
import {DetailOrderService} from '../../services/order/DetailOrderService'

class DetailOrderController{
    async handle(req: Request, res: Response){

        const order_id = req.query.order_id as string;

        //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
        const detailOrderService = new DetailOrderService();

        const order = await detailOrderService.execute({order_id});
        //RETORNA PARA O USUARIO
        //O BANCO JA FOI CADASTRADO
        return res.json(order);
    }
    
}
export {DetailOrderController};