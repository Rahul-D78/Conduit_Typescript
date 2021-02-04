import { Router } from 'express'
import { articleRouter } from './articles'
import { commentRoute } from './comments'
// import { favRoute } from './favourites'
import { profileRoute } from './profile'
import { usersRoute } from './users'
import {tagsRoute} from './tags'

const route = Router()

route.use('/articles', articleRouter)
route.use('/users', usersRoute)
route.use('/comments', commentRoute)
route.use('/profiles', profileRoute)
// route.use('/articles', favRoute)
route.use('/tags', tagsRoute)

export const allRoutes = route