import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface PayLoad{
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
    const authToken = req.headers.authorization;

    console.log(authToken)

    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    console.log(token)

    try{
        const {sub} = verify(
            token,
            process.env.JWTOKEN
            ) as PayLoad;
            
    return next();
    
    }catch(err){
        return res.status(401).end();
    }
}
