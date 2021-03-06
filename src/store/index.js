import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';

const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));
export default store