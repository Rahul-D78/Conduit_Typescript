import React, {useState, useEffect} from 'react'
import { Paper, TextField, Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import useStyle from './styles'

import { createArticles, updateArticle } from '../../actions/posts'


function Form({ currentSlug, setCurrentSlug }) {

    const classes = useStyle();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        title:"", description:"", body:""
    })

    const article = useSelector((state) => currentSlug ? state.posts.find((p) =>  p.slug === currentSlug): null);

    useEffect(() => {
        if(article) setCurrentSlug(article)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [article])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentSlug) {
            dispatch(updateArticle(currentSlug, postData))
        }else {

            dispatch(createArticles(postData))
        }
        clear()
    }

    const clear = () => {
        setCurrentSlug("");
        setPostData({ title:"", description:"", body:""})
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentSlug ? 'Editing': 'creating' } an article</Typography>
                <TextField name="title" variant="outlined" label="Title"  fullWidth value={postData.title} onChange={(e)  => setPostData({...postData, title: e.target.value})} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value})}/>
                <TextField name="body" variant="outlined" label="Body" fullWidth value={postData.body} onChange={(e) => setPostData({ ...postData, body: e.target.value})}/>
                {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>submit</Button>
                <Button variant="contained" color="secondary" onClick={clear}  size="small" fullWidth>clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
