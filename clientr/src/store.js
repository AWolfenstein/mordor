
import logger from 'redux-logger';
import reducers from './reducers';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import {loadState} from './localStorage';
//import _ from 'lodash';
const persistedState = loadState();
const store = createStore(
    reducers,persistedState,
    applyMiddleware(thunk,logger, ReduxPromise)
    
);

export default store;