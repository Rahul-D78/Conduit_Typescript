import { getRepository } from "typeorm";
import { Article } from "../entities/Article";

export async function getAllTags() {

    try {
    const repo = getRepository(Article)
    const articles = await repo.findOne()
    
    if(!articles) throw new Error('articles not found')
    return articles.tagList;
    }catch(e) {
        throw e
    }
}