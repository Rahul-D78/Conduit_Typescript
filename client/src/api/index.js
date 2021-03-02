import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000' })

//GET Request 
export const fetchArticles = () => API.get('/articles')

//POST Request
export const PostArticle = (newPost) => API.post('/articles', newPost) 

//PATCH Request 
export const updateArticle = (slug, updateArticle) => API.patch(`/articles/${slug}`, updateArticle);

//Delete Request
export const deleteArticle = (slug) => API.delete(`/articles/${slug}`)