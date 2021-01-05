import * as CONSTANTS from '../actions/constants';

const initialStateSearch = { searchField: '' };
export default (state = initialStateSearch, action={}) => {
    switch(action.type) {
        case CONSTANTS.CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
            // return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}