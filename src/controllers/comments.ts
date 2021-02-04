import { getRepository } from "typeorm";
import { Article } from "../entities/Article";
import { Comment } from "../entities/Comment";
import { User } from "../entities/User";
import { sanitization } from "../utils/security";

interface CommentData {
   body: string,
}

export async function createComment(data: CommentData,slug: string, email: string): Promise<Comment> {
    
    if(!data.body) throw new Error('Comment body is empty please check')

    try{

        const repo = getRepository(Comment)
        const articleRepo = getRepository(Article)
        const userRepo = getRepository(User)

        const user = await userRepo.findOne(email)
        const article = await articleRepo.findOne(slug)
        
        if(!article) throw new Error('Article Not Found')
        if(!user) throw new Error('Please Login to Comment')
        
        const comment = await repo.save(new Comment(
            data.body,
            await sanitization(user as any as User)
        ))
        return comment
    }catch(e) {
        throw e
    }
}

export async function getAllComment(slug: string) {
    try {
    const repo = getRepository(Comment)
    const comments = await repo.findOne(slug)
    if(!comments) throw new Error('No comment for this slug exists')
    return comments
    }catch(e) {
        throw e
    }
}

export async function updateComment(data: CommentData,slug: string, email: string): Promise<Comment> {
    
    
    //check for existing
    try {
    const repo  = getRepository(Comment)
    const userRepo = getRepository(User)

    const comment = await repo.findOne(slug)
    const user = await userRepo.findOne(email)
    
    if(!comment) throw new Error("No Comment with this slug exists");

    if(typeof data.body != undefined) comment.body = data.body
    if(!user) throw new Error('unauthorized to update a comment')
    await sanitization(user as unknown as User)
    
    const updatedComment = await repo.save(comment)
    
    return updatedComment
    }catch(e) {
        throw e
    }
}

export async function deleteComment(id: string, email: string) {

    try {

       const uRepo = getRepository(User)
       const user = uRepo.findOne(email)

       const repo = getRepository(Comment)
       const comment = repo.findOne(id)

       if(!comment) throw new Error('Comment does not exists')
       if(!user) throw new Error('Unauthorized to delete a comment')

       repo.delete(comment as unknown as Comment)
    }catch(e) {
        throw e
    }

}