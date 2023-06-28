import prismaClient from "../../prisma";

interface ListProducyRequest{
    category_id: string
}


class ListProductService{
    async execute({category_id}: ListProducyRequest){
        //SE TIVER CRIA
        const list_category = await prismaClient.product.findMany({
            where:{
                category_id: category_id
            }
        })
        return list_category;
    }
}

export{ListProductService}

