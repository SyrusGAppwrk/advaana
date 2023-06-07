import {  createStore, applyMiddleware } from 'redux';
//import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

// before actions hit reducers, they hit middlewares first
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

