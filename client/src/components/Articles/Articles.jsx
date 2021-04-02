import React from 'react'
import Article from './Article/Article';
import { CircularProgress} from '@material-ui/core';
// import useStyle from './styles'

import { useSelector } from 'react-redux';


const Articles = ({ setCurrentSlug }) => {

    // const classes = useStyle()

    const articles = useSelector((state) => state.posts)
    console.log(articles);

    return (
        !articles.length ? 
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>

        <CircularProgress style={{display: "flex", justifyContent: "center", alignItems: "center"}} /> 
        
        </div>
        
        :(
            <div style={{paddingTop: "50px"}}>
                {articles.map((article) => (
                    <div key={article.slug} >
                        <Article article={article} setCurrentSlug={setCurrentSlug} />
                    </div>
                    ))}
            </div>
        )
    )
}

export default Articles