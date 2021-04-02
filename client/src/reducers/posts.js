/* eslint-disable import/no-anonymous-default-export */
export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH': 
            return posts.filter((post) => post.slug === action.payload)
        case 'CREATE':
            return [...posts, action.payload];
        case 'LIKE':
            return posts.map((post) => post.slug === action.payload.slug ? action.payload : post);
        case 'UPDATE':
            return posts.map((post) => post.slug === action.payload.slug ? action.payload : post);    
        case 'DELETE': 
            return posts.filter((post) => post.slug !== action.payload);    
        
        default:
            return posts;    
    }
}