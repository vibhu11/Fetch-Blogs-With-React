
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPost =  () => {
    return async (dispatch) =>{
        const response= await jsonPlaceholder.get('/posts');
        dispatch ({
            type: 'Fetch_Post',
            payload: response.data
        });
    };
    
};

// export const fetchUser = (id) => async dispatch => {
//     const response= await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'Fetch_User' , payload: response.data})
// };

export const fetchUser = (id) => async dispatch => {
    _fetchUser(id, dispatch);
 };
 
 const _fetchUser = _.memoize( async(id, dispatch) => {
     const response= await jsonPlaceholder.get(`/users/${id}`);
     dispatch({ type: 'Fetch_User' , payload: response.data})
 });