import express from 'express'
import { createConnection } from 'typeorm'
import { Article } from './entities/Article'
import {Comment} from './entities/Comment'
import { Profile } from './entities/Profile'
import { User } from './entities/User'
import { allRoutes } from './routes/allRoutes'


const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use(allRoutes)

app.get('/', (req, res) => {
    res.send('HI')
})

async function start() {
    await createConnection({
        type: 'postgres',
        username: 'conduit',
        password: 'conduit',
        database:'conduit',
        entities:[User, Article, Comment, Profile],
        // dropSchema:true,
        synchronize:true,
        logging:true,
        logger:'advanced-console'
    })
    app.listen(PORT, () => {
        console.log(`serving the site on -----> http://localhost:3000`);
        
    })
}

start()
