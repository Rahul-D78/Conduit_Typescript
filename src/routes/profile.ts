import { Router } from 'express'
import { follow, unfollow } from '../controllers/profile'
import { authByToken } from '../middlewares/auth'

const route = Router()

// // route.get('/:username', (req, res) => {

// //     try {

// //     }catch(e) {
// //         res.status(401).send({
// //             err: `unauthorised to fetch all articles that you follow ${e}`
// //         })
// //     }
// // })

route.post('/:username/follow', authByToken,async(req, res) => {

    try{
        const followUser = await follow((req as any).user.email, req.params.username)
        res.status(200).send({
            body: ['sending follow user List', followUser]
        })
    }catch(e) {
        res.status(500).send({
            err : `unauthorised to follow a user ${e}`
        })
    }
})

route.delete('/:username/unfollow', authByToken,async(req, res) => {

    try{
        const unfollowUser = await unfollow((req as any).user.email, req.params.username)
        return res.status(200).send({
            body: ['unfollw sucessfull', unfollowUser]
        })
    }catch(e) {
        res.status(401).send({
            err : [`unauthorised to unfollow a user ${e}` ]
        })
    }

})

export const profileRoute = route