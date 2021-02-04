import bcrypt  from 'bcrypt'

const salt_rounds = 10

export async function hashPass(password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        bcrypt.hash(password, salt_rounds, (err, hashedPass) => {
            if(err) throw reject(err)
            return resolve(hashedPass)
        })
    })
}

export async function matchPass(hash: string, password: string): Promise<Boolean> {
    return new Promise<Boolean>((resolve, reject) => {
        bcrypt.compare(password, hash, (err, same) => {
            if(err) throw reject(err)
            resolve(same)
        })
    })
}