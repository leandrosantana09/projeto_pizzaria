import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    email: string;
    password: string; 
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        //CONFERIR SE O EMAIL FOI PREENCHIDO, E SE É DIFERENTE DOS QUE JA FORAM CADASTRADOS
        //SE FOI PREENCHIDO
        if(!email){
            throw new Error('DEU ERRO')
        }
        //SE É DIFERENTE
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(userAlreadyExists){
            throw new Error('erro')
        }

        const passHash = await hash(password, 8)
        //CADASTRANDO
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passHash
            },
            select:{
                id: true,
                name: true,
                email: true
            }
        })
        return user;
    }
}

export{CreateUserService}