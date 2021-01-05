import * as CONSTANTS from './constants';

export const setSearchField = (text) => ({
    type: CONSTANTS.CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots = () => (dispatch) => {
    dispatch({type: CONSTANTS.REQUEST_ROBOTS_PENDING, payload: true});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: CONSTANTS.REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(err => dispatch({type: CONSTANTS.REQUEST_ROBOTS_FAILED, payload: err}));
}