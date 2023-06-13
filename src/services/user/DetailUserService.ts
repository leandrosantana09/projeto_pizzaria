import prismaClient from "../../prisma";

// interface UserRequest{
//     name: string;
//     email: string;
//     password: string; 
// }

class DetailUserService{
    async execute(){
        return {ok: true};
    }
}

export{DetailUserService}