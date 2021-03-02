/* eslint-disable import/no-anonymous-default-export */
export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...posts, action.payload];

        case 'UPDATE':
            return posts.map((post) => post.slug === action.payload.slug ? action.payload : post);    
            
        default:
            return posts;    
    }
}