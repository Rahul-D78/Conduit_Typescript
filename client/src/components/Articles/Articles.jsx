import React from 'react'
import Article from './Article/Article';
import { CircularProgress, Grid } from '@material-ui/core';
import useStyle from './styles'

import { useSelector } from 'react-redux';


const Articles = props => {

    const classes = useStyle()

    const articles = useSelector((state) => state.posts)
    console.log(articles);

    return (
        !articles.length ? <CircularProgress /> :(
            <Grid className={classes.content} container alignItems="stretch">
                {articles.map((article) => (
                    <Grid item key={article.id} xs={12} sm={6} lg={3}>
                        <Article article={article}/>
                    </Grid>
                    ))}
            </Grid>
        )
    )
}

export default Articles
