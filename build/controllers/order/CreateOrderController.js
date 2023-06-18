// import {Request, Response} from 'express';
// import {CreateOrderService} from '../../services/order/CreateOrderService'
// class CreateOrderController{
//     async handle(req: Request, res: Response){
//         //CRIAR VARIAVEIS COM AS INFOS RECEBIDAS
//         const {table, name} = req.body;
//         //CRIAR UM OBJETO COM A FUNÇÃO FEITA EM SERVICE
//         const createOrderService = new CreateOrderService();
//         const order = await createOrderService.execute({
//             table, 
//             name
//         });
//         //RETORNA PARA O USUARIO
//         //O BANCO JA FOI CADASTRADO
//         return res.json(order)
//     }
// }
// export {CreateOrderController};
