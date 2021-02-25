import { Router } from 'express'
import { deleteUser, getUserByEmail, loginUser, registerUser, updatUser } from '../controllers/users'
import { authByToken } from '../middlewares/auth'

const router = Router()

router.get('/:email' ,async(req, res) => {
   try{
      const user = await getUserByEmail(req.params.email)
      if(!user) throw new Error('No such user with this email found')
      return res.status(200).send(user)
   }catch(e) {
       res.status(500).send({
           err : `error while gettiing the user ${e.message}`
       })
   }
})

//Login -----> existing user login
router.post('/login', async(req, res) => {
   try{
       const user = await loginUser(req.body.user)
       res.status(200).send({
        success : {body : ["success", user]}
       })
   }catch(e) {
    res.status(500).send({
        errors : {error : ["Login Failed", e.message]}
       })
   }
})

//POST --------> Register a new User
router.post('/', async(req, res) => {
    try {
    const user = await registerUser(req.body.user)
    return res.send(user)
    }catch(e) {
        res.status(500).send({
            err : `error occured while creating a new user ${e}`
        })
    }
})

//PATCH   ----> Update
router.patch('/', authByToken,async(req, res) => {
   try {
       const user = await updatUser(req.body.user, req.body.user.email)
       res.status(200).send({
           body: user
       })
   }catch(e) {
       res.status(500).send({
           err : `unable to update the users ${e}`
       })
   }
})

//DELETE ----> 
router.delete('/', authByToken, async(req, res) => {
    try {
        const user = deleteUser(req.body.user.email)
        res.status(200).send({
            body: `sucessfully deleted the user ${user}`
        })
    }catch(e) {
        res.status(500).send({
            err: `could not delete user ${e}`
        })
    }
})

export const usersRoute = router