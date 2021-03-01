import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchArticles();

        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(e) {
        console.log(e);
    }
}

export const createArticles = (post) => async (dispatch) => {
    try {
        const { data } = await api.PostArticle(post);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}