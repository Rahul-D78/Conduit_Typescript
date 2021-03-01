import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Form from './Form/Form'
import Articles from './Articles/Articles'
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <div>
        <Navbar/>
        <Articles/>
        <Form />
        </div>
    )
}

export default App