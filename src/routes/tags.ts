import { Router } from 'express'
import { getAllTags } from '../controllers/tags'

const router = Router()

//GET ----> get all the tags
router.get('/', async (req, res) => {
    try{
        const tags = await getAllTags()
        res.status(200).send({
            body: [{tags}]
        })
    }catch(e) {
        res.status(500).send({
            err : `error while fetching tags ${e}` 
        })
    }
})

export const tagsRoute = router