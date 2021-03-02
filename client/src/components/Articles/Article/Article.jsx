import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@material-ui/core'

// import {NotificationsActive} from '@material-ui/icons';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyle from './styles'

const Article = ({article, setCurrentSlug}) => {

    const classes = useStyle();

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image=" " title={article.name} />
                <div className={classes.overlay}>
                    <Typography variant="h6"> {article.title} </Typography>     
                    <Typography variant="body2"> {moment(article.createdAt).fromNow()} </Typography>
                    
                </div>
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size="small"
                     onClick={() => setCurrentSlug(article.slug)}>
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                </div>
                {/* <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{article.tags.map((tag) => `#${tag} `)}</Typography>
                </div> */}
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom >article.message</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={() => {}}>
                        <ThumbUpAltIcon fontSize="small" />
                        Like
                        article.likeCount
                    </Button>
                    <Button size="small" color="primary" onClick={() => {}}  >
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Article
