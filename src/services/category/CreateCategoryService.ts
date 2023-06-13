import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string;

}

class CreateCategoryService{
    async execute({name}: CategoryRequest){
        //SE NÃO TIVER NOME VOLTA
        if(!name){
            throw new Error('DEU ERRO')
        }
        //SE TIVER CRIA
        const category = await prismaClient.category.create({
            data:{name},
            select: {
                id:true,
                name:true
            }
        })
        return category;
    }
}

export{CreateCategoryService}