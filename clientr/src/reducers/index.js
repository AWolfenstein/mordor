import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer from './default-reducer';
import changelangReducer from './changelang';
import authReducer from './authReducer';
const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    changelanguge:changelangReducer,
    auth: authReducer
});

export default rootReducers;