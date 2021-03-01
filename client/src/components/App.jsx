import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
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
        </div>
    )
}

export default App