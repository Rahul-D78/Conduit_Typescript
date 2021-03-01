import React from 'react'
import Article from './Article/Article';
import { Grid } from '@material-ui/core';
import useStyle from './styles'

import { useSelector } from 'react-redux';

const articles = [
    {id: 1, name: 'apple-macbook', manufacture: 'apple', price: '20.5'},
    {id: 1, name: 'apple-macbook', manufacture: 'apple', price: '20.5'},
]


const Articles = props => {

    const classes = useStyle()

    const posts = useSelector((state) => state.posts)
    console.log(posts);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4} >
                {articles.map((article) => (
                    <Grid item key={article.id} xs={12} sm={6} lg={3}>
                        <Article article={article}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Articles
