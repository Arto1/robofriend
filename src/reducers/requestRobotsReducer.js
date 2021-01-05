import * as CONSTANTS from '../actions/constants';

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}
export default (state = initialStateRobots, action={}) => {
    switch(action.type) {
        case CONSTANTS.REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: action.payload});
        case CONSTANTS.REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false});
        case CONSTANTS.REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false});    
        default:
            return state;
    }
}