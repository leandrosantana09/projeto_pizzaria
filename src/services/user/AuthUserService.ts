import prismaClient from "../../prisma";
import { hash, compare} from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest{
    email: string;
    password: string; 
}

class AuthUserService{
    async execute({email, password}: AuthRequest){

        const user = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error('User/password incorrect!')
        }

        const passMatch = await compare(password, user.password)

        if(!passMatch){
            throw new Error('User/password incorrect!')

        }

        const passHash = await hash(password, 8)


        //ENTROU
        const token = sign(
        {
            name:user.name,
            email:user.email
        },
        process.env.JWTOKEN,
        {
            subject: user.id,
            expiresIn: '30d'
        }
        )

        
        return {
            name: user.name,
            email: user.email,
            token: token}
    }
}

export{AuthUserService}