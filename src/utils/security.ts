import { User } from "../entities/User";

export async function sanitization(user: User) {
    if(user.password) delete user.password
    return user
}