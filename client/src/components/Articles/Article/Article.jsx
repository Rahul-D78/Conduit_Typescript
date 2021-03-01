import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core'

import {NotificationsActive} from '@material-ui/icons';

import useStyle from './styles'

const Article = ({article}) => {

    const classes = useStyle();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image=" " title={article.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            { article.name } 
                        </Typography>
                        <Typography variant="h5">
                            ${article.price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">{ article.maufacture }</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Products list">
                        <NotificationsActive/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Article
