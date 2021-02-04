import { User } from "../entities/User";
import jwt from 'jsonwebtoken'

const secret = "some-very-secret-key"

export async function sign(user: User):Promise<string> {
    return new Promise<string>((resolve, reject) => {
        jwt.sign({
            username: user.username,
            email: user.email
        }, secret, (err: any, encoded: string | undefined) => {
            if(err) throw reject(err)
            return resolve(encoded as string)
        })
    })
}

export async function decode(token: string):Promise<User> {
   return new Promise((resolve, reject) => {
       jwt.verify(token, secret, (err, decoded) => {
           if(err) throw reject(err)
           return resolve(decoded as User)
       })
   })
}