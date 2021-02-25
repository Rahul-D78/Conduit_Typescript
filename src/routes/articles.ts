import { Router, Request, Response, NextFunction } from 'express'
import { createArticle, deleteArticle, getArticleBySlug, getArticles, updateArticle } from '../controllers/articles'
import { authByToken } from '../middlewares/auth'
// import { createArticle } from '../controllers/articles'

// import redis from 'redis'
// const client = redis.createClient(); 

const router = Router()

/*
const redis_post = (req: Request, res: Response, next:NextFunction) => {
  client.get('postData', (err, redis_data) => {
  if(err) throw err
  if(redis_data){
  console.log('redis_data')
  res.send(JSON.parse(redis_data)) 
  }else{
    next()
  }
  })
}
*/
//GET  /articles ---> To GET recent article globally 
router.get('/' ,async(req, res) => {
    try{
        const articles = await getArticles()
        
    //    client.setex('postData', 60, JSON.stringify(articles)) 

       res.status(200).send(articles)
    }catch(e) {
        res.status(500).send({
            err : `something went wrong ${e}`
        })
    }
})

//GET /articles/feed ----> To GET the recent articles from the user you follow
router.get('/feed', (req, res) => {
    res.send('get all the followers activity')
})

//GET ------> To get an article with the slug
router.get('/:slug', async(req, res) => {
    try {
        const article = await getArticleBySlug((req as any).params.slug)
        res.status(200).send(article)
    }catch(e) {
        res.status(401).send({
            err : `something went wrong ${e}`
        })
    }
})

//POST  /aticles -------> POST a new article
router.post('/', authByToken, async(req, res) => {
    try {
        const article = await createArticle(req.body.article, (req as any).user.email)
        res.status(200).send(article)
    }catch(e) {
        console.log(e);
        
        res.status(500).send({
            err : `error creating an article ${e}`
        })
    }
})

router.patch('/:slug', authByToken,async(req, res) =>{
    
    try {
    const article = await updateArticle(req.body.article, req.params.slug, (req as any).user.email)
    res.status(200).send(article)
    }catch(e) {
        res.status(500).send({
            errors : {error : ["Patching failed", e.message]}
        })
    }
})

router.delete('/:slug', authByToken, async(req, res) => {
    try {
        const article = await deleteArticle(req.params.slug, (req as any).user.email)
        res.status(200).send({
            success: ['succesfully deleted' , article]
        })
    }catch(e) {
        res.status(500).send({
            err : `could not able to delete ${e}`
        })
    }
})

export const articleRouter = router
