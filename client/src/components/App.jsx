import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Form from './Form/Form';
import Auth from './Auth/Auth';
import SignUp from "./Auth/SignUp/SignUp"
import Login from "./Auth/Login/Login";
import Admin from "./Admin/Admin";
import Read from "./Articles/Article/Read";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Container, Grow } from '@material-ui/core';
import Articles from './Articles/Articles';
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
        <BrowserRouter>
        <Navbar/>

        <Grow in>
                <Switch>
                    <Route component={Read} path="/read" exact setCurrentSlug={currentSlug}/>
                    <Route  component={Login} path="/login" exact setCurrentSlug={setCurrentSlug}/>
                    <Route  component={SignUp} path="/signup" exact setCurrentSlug={setCurrentSlug}/>
                    <Route  component={Auth} path="/auth" exact setCurrentSlug={setCurrentSlug}/>
                    <Route  component={Admin} path="/admin" exact setCurrentSlug={setCurrentSlug}/>
                    <Route  component={Articles} path="/" exact setCurrentSlug={setCurrentSlug}/>
                    <Route component={Form} path="/article" exact currentSlug={currentSlug}  setCurrentSlug={setCurrentSlug} />
                </Switch>
        </Grow>
        </BrowserRouter>
        </Container>
    )
}

export default App;