import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4000' })

//GET Request 
export const fetchArticles = () => API.get('/articles')

//POST Request
export const PostArticle = (newPost) => API.post('/articles', newPost) 