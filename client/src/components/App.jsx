import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Form from './Form/Form'
import { Container, Grid, Grow } from '@material-ui/core';
import Articles from './Articles/Articles'
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';

const App = () => {

    const dispatch = useDispatch();
    const [currentSlug, setCurrentSlug] = useState("");

    useEffect(() => {
        dispatch(getPosts());
    }, [currentSlug, dispatch])

    return (
        <Container>
        {/* <Navbar/> */}
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Articles setCurrentSlug={setCurrentSlug}/>
                </Grid>
                    <Form currentSlug={currentSlug}  setCurrentSlug={setCurrentSlug} />
            </Container>

        </Grow>
        </Container>
    )
}

export default App