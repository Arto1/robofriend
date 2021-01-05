import { combineReducers } from "redux";
import searchRobots from './searchRobotsReducer';
import requestRobots from './requestRobotsReducer';

export default combineReducers({
    searchRobots,
    requestRobots
});