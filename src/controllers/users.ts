import { getRepository } from "typeorm"
import { User } from "../entities/User"
import { sign } from "../utils/jwt"
import { hashPass, matchPass } from "../utils/password"
import { sanitization } from "../utils/security"

interface userSignUpData{
    email:string,
    username: string,
    password: string
}

interface updateUser {
    username: string,
    bio: string,
    password: string,
    image: string
}

interface loginUserData {
    email: string,
    password: string
}


export async function registerUser(data: userSignUpData):Promise<User> {

    //Validate given User credentials
    if(!data.email) throw new Error('email field is blank')
    if(!data.username) throw new Error('username field is blank')
    if(!data.password) throw new Error('password filed is blank') 

    //Get the repo of User
    try {
    const repo =  getRepository(User)

    const existing = await repo.findOne((data.email as string).toLowerCase())
    if(existing) throw new Error('user with this email exists')
    
    const user = await repo.save(new User(
        (data.email as string).toLowerCase(), 
        data.username,
        await hashPass(data.password) 
    )) 
    return sanitization(user)
    }catch(e) {
       throw e
       
    }
}

export async function loginUser(userLoginData: loginUserData) {

    if(!userLoginData.email) throw new Error("Email field is blank")
    if(!userLoginData.password) throw new Error("password is blank")

    
    //check for existing
    
    try {
    const repo  = getRepository(User)

    
    const user = await repo.findOne(userLoginData.email)

    if(!user) throw new Error("No user with this Email");

    //check if password mathches
    const passMatch = await matchPass(user.password!, userLoginData.password)
    if(passMatch == false) throw new Error("Wrong password");

    user.token = await sign(user)

    return sanitization(user)
    }catch(e) {
        throw e
    }
}

export async function getUserByEmail(email: string): Promise<User> {

    const repo = getRepository(User)
    
    try {
    const user = await repo.findOne(email)

    if(!user) throw new Error('User with this email does not exists')
    return sanitization(user)
    }catch(e) {
        throw e
    }
    
}

export async function updatUser(data: updateUser, email: string) {
  
try{
    const repo = getRepository(User)

    const user  = await repo.findOne(email)

    if (!user) throw new Error('unauthorized to update user')


    if (data.bio) user.bio = data.bio
    if (data.username) user.username = data.username
    if (data.image) user.image = data.image
    if (data.password) user.password = await hashPass(data.password)

    const updatedUser = await repo.save(user)

    return sanitization(updatedUser)
    }catch(e) {
        throw e
    }
}

export async function deleteUser(email: string) {
    try { 
        const repo = getRepository(User)
        const user = await repo.findOne(email)

        if(!user) throw new Error('unauthorized to delete the user')
        
        repo.delete(user)

    }catch(e) {
        throw e
    }
}