import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchArticles();

        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(e) {
        console.log(e);
    }
}