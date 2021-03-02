import { getRepository } from "typeorm";
import { Article } from "../entities/Article";
import { User } from "../entities/User";
import { sanitization } from "../utils/security";
import {slugify} from './../utils/stringUtils'

interface ArticleData {
    title: string,
    description : string,
    body: string,
    tagList: string[]
}

// TODO: email: string

export async function createArticle(data: ArticleData): Promise<Article> {

    if(!data.body) throw new Error("Article body is absent")
    if(!data.description) throw new Error("description body is absent")
    if(!data.title) throw new Error("title body is absent")

    const articleRepo = getRepository(Article)
    // const userRepo = getRepository(User)
    
    
    try {
    //check for the existance 
    const exist = await articleRepo.findOne(data.title)
    if(exist) throw new Error('Change the article title this one already exists')

    
        // const user = await userRepo.findOne(email)
        // if(!user) throw new Error("user does not exists")
     
        const article = await articleRepo.save(new Article(
            slugify(data.title),
            data.title,
            data.description,
            data.body,
            data.tagList,
            // await sanitization(user) 
        ))
        return article
    }catch(e) {
        throw e
    }
}

export async function getArticles() {
    
    try {
    const repo = getRepository(Article)
    // console.log(repo);
    
    const articles = await repo.find()
    if(!articles) throw new Error('articles not found')
    return articles
    }catch(e) {
        throw e
    }
}

export async function getArticleBySlug(slug: string) {
    try {
        const repo = getRepository(Article)
        const article = await repo.findOne(slug)

        // console.log(article);
        if(!article) throw new Error('article with this slug not found')
        return article
    }catch(e) {
        throw e
    }
}

//GET recent articles from the users that you follow
export async function getArticleByFeed(email: string) {
 
   try {
   const repo = getRepository(User)
   const feed = await repo.findOne(email)
   
   if(!feed) throw new Error("you don't have any recent feeds")
   return 
   }catch(e) {
       throw e
   }

}
// TODO:email: string
export async function updateArticle(data: ArticleData, slug: string): Promise<Article> {
    
    try {
       const repo = getRepository(Article)
       const article = await repo.findOne(slug)

    //    const uRepo = getRepository(User)
    //    const user = await uRepo.findOne(email)

       if(!article) throw new Error('Article does not exists')
    //    if(!user) throw new Error('Please Login to update an a article')

       if(data.title) article.slug = slugify(data.title) 
       if(data.body) article.body = data.body
       if(data.description) article.description = data.description
       if(data.tagList) ( article.tagList as any) = data.tagList 
       if(data.title) article.title = data.title
    //    if(user) await sanitization(user as any)

       const updatedArticle = await repo.save(article as any)
       return updatedArticle

    }catch(e) {
       throw e
    }
}

export async function deleteArticle(slug: string, email: string) {

    try {
        const repoU = getRepository(User)
        const user = await repoU.findOne(email)

        const repo = getRepository(Article)
        const article = await repo.findOne(slug)
        
        if(!repoU) throw new Error('unauthorized to delete an article')
        if(!article) throw new Error('Article with this slug not exists')

        repo.delete(article as unknown as Article)
    }catch(e) {
        throw e
    }
    
}
