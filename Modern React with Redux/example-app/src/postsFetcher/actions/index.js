import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
    
    const response = await jsonPlaceholder.get('/posts');
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    });
}

// Solution: Memoized the function that would be called with the arguments
// and return the result of calling that function, instead of returning the
// the function itself.
// Con: It does not allow to refetch a user. It should be done by a new action.

// export const fetchUser = (userId) => dispatch => {
//     _fetchUser(userId, dispatch);    
// }

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// })

// Memoizing the outer function would not work, because even if memoized
// and the return would be the same function, it would inside of it still
// perform the network request.
//
// Memoizing the interior function would not work, because each time we 
// would return yet a new function, although memoized. Therefore, in the end
// all returned function would be different and would perform all the network
// requests.
// export const fetchUser = _.memoize(function(userId) {
//     return _.memoize(async function(dispatch){    
//         const response = await jsonPlaceholder.get(`/users/${userId}`);
//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         });
//     })
// })

// Non-Memoized version
export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // It will dispatch a function and will be executed by redux-thunk.
    // Due to await it will wait until the posts have been fetched.
    await dispatch(fetchPosts());
    // const uniqIds = _.uniq(// It will return the unique values on the list
    //     // It will loop through the posts and extract userId
    //     _.map(getState().posts, 'userId')
    // )
    // uniqIds.forEach(userId => dispatch(fetchUser(userId)))
    // Chaining option
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(userId => dispatch(fetchUser(userId)))
        .value()
}