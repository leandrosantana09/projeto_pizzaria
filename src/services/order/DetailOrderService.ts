import prismaClient from "../../prisma";

interface OrderRequest{
    order_id:string
}

class DetailOrderService{
    async execute({order_id}: OrderRequest){

        const order = await prismaClient.order.findFirst({
                where:{
                    id: order_id
                },
                select:{
                   id: true,
                   name: true
                }
            }
        )        
        return order;
    }
}

export{DetailOrderService}