import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchArticles();

        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(e) {
        console.log(e);
    }
}

export const getPostBySlug = (slug, history) => async (dispatch) => {
    try {
        const { data } = await api.fetchArticleBySlug(slug)

        dispatch({ type: 'FETCH', payload: data })
        history.push(`/read`)
    } catch (e) {
        console.log(e);
    }
}

export const createArticles = (post, history) => async (dispatch) => {
    try {
        const { data } = await api.PostArticle(post);

        dispatch({ type: 'CREATE', payload: data })
        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const updateArticle = (slug, article) => async (dispatch) => {
    try {
        const {data} = await api.updateArticle(slug, article)
         
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteArticle = (slug) => async (dispatch) => {
    try {
        await api.deleteArticle(slug)

        dispatch({ type: 'DELETE', payload: slug })
    } catch (error) {
        console.log(error);
    }
}

export const likeArticle = (slug) => async (dispatch) => {
    try {
        const {data} = await api.likeArticle(slug);

        dispatch({ type: 'LIKE', payload: data })
    } catch (e) {
        console.log(e);
    }
}