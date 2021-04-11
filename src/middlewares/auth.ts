import { NextFunction, Request, Response } from "express";
import { custom, decode } from "../utils/jwt";

export async function authByToken(req: Request, res: Response, next: NextFunction) {

    
    const authHeader = req.header('authorization')?.split(' ')
    if(!authHeader) return res.status(401).send({
        errors : {body : ["Authorization failed"]}
    })
    
    if(authHeader[0] != 'Token') res.status(401).json({
        errors : {body : ["Authorization failed", "Token missing"]}
    })

    try {
        const token = authHeader[1];
        const customAuth = token.length < 500;
        let decodedData;

        if(token && customAuth) {
            decodedData = await decode(token)
            if(!decodedData) throw new Error('No user found')
            ;(req as any).user = decodedData
        }else {
            decodedData = await custom(token);
            (req as any).user = decodedData
        }

        return next()
    }catch(e) {
        res.status(500).send({
            err: `Login Failed ${e}`
        })
    }
}