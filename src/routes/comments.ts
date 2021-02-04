import { Router } from 'express'
import { createComment, deleteComment, getAllComment } from '../controllers/comments'
import { authByToken } from '../middlewares/auth'

const router = Router()

router.get('/:slug/comments',async(req, res) => {
    
    try {
        const comments = await getAllComment(req.params.slug)
        res.status(200).send([{comments}])
    }catch(e) {
        res.status(500).send({
            err: `error while fetching comments ${e}`
        })
    }
   
})

router.post('/:slug/comments' ,authByToken, async(req, res) => {
    try {
        const comment = await createComment(req.body.comment,req.params.slug, (req as any).user.email);
        res.send(comment)
    }catch(e) {
        res.status(401).send({
            err : "unauthorized to push a comment"
        })
    }
})

router.delete('/:slug/comments/:id',  authByToken, async(req, res) => {
    try {
        const article = await deleteComment(req.params.id, (req as any).user.email)
        res.status(200).send({
            body: ['successfully deleted the article', article]
        })
    }catch(e) {
        res.status(500).send({
            err: `could not able to delete comment ${e}`
        })
    }
})
export const commentRoute = router