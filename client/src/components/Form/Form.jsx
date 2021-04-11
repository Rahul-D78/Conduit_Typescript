import React, {useState, useEffect} from 'react'
import { Paper, TextField, Typography, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useStyle from './styles'

import { createArticles, updateArticle } from '../../actions/posts'
let Marked = require("marked");


function Form({ currentSlug, setCurrentSlug }) {

    const user = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyle();
    const history = useHistory();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        title:"", description:"", body:""
    })
    const article = useSelector((state) => currentSlug ? state.posts.find((p) =>  p.slug === currentSlug): null);

    useEffect(() => {
        if(article) setCurrentSlug(article)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [article])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentSlug) {
            dispatch(updateArticle(currentSlug, postData))
        }else {

            dispatch(createArticles({...postData , name: user?.username}, history))
        }
        // clear()
    }

    // const clear = () => {
    //     setCurrentSlug("");
    //     setPostData({ title:"", description:"", body:""})
    // }

    if(!user?.username) {
        return(
            <Typography variant="h6" align="center">
                Please login to create a post and like other's post
            </Typography>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{ currentSlug ? 'Editing': 'creating' } an article</Typography>
                <TextField name="title" variant="outlined" label="Title"  fullWidth value={postData.title} onChange={(e)  => setPostData({...postData, title: e.target.value})} />
                <TextField name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value})}/>
               
               
                <TextField name="body" variant="outlined" label="Body" fullWidth value={postData.body} onChange={(e) => setPostData({ ...postData, body: e.target.value})}/>
               
                <textarea

                    placeholder= {"New post title"}
                    autoComplete="off"
                    type="text"
                    
                    style={{fontSize: "38px", autoFocus: "on"}}
                />
                <textarea
                    style={{
                    boxSizing: "border-box",
                    border: "1px solid black",
                    borderRadius: "3px",
                    resize: "none",
                    fontSize: "20px",
                    lineHeight: "24px",
                    overflow: "auto",
                    height: "auto",
                    padding: "8px",
                    boxShadow: "0px 4px 10px -8px black"
                    
                    }}
                />

                {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>submit</Button>
                {/* <Button variant="contained" color="secondary" onClick={clear}  size="small" fullWidth>clear</Button> */}
            
            </form>
            <div>
          <div
            dangerouslySetInnerHTML={{ __html: Marked(postData.body) }}
            style={{ backgroundColor: "grey", height: "150px", width: "150px" }}
          ></div>
        </div>
        </Paper>
    )
}

export default Form;
