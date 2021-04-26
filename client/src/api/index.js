import axios from 'axios';

const API = axios.create({ baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://3.85.114.238/' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Token ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

//GET Request 
export const fetchArticles = () => API.get('/articles');

//GET Request
export const fetchArticleBySlug = (slug) => API.get(`/articles/${slug}`)

//POST Request
export const PostArticle = (newPost) => API.post('/articles', newPost); 

//PATCH Request 
export const updateArticle = (slug, updateArticle) => API.patch(`/articles/${slug}`, updateArticle);

//Delete Request
export const deleteArticle = (slug) => API.delete(`/articles/${slug}`);

//Liking a Post
export const likeArticle = (slug) => API.patch(`/articles/like/${slug}`);

export const signUp = (formData) => API.post('/users/register', formData);
export const logIn  = (formData) => API.post('/users/login', formData);
