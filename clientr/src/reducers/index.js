import { combineReducers } from 'redux';

// calling the default reducer to create a link
import defaultReducer from './default-reducer';
import changelangReducer from './changelang';
import authReducer from './authReducer';
import addFanficReducer from './addFanficReducer';
import userUdateInfoReducer from './userUdateInfoReducer';
import homeReducer from './homeReducer';
import readReducer from './readReducer';
const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    changelanguge:changelangReducer,
    auth: authReducer,
    userudateinfo: userUdateInfoReducer,
    addfanfic: addFanficReducer,
    homedata: homeReducer ,
    readpage: readReducer
});

export default rootReducers;