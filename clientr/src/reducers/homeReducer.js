import { FANFICS_LOADED} from '../actions/HomeAction';

var initialState = {
    loggedIn: localStorage.getItem('token') ? true : false
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);
  
    switch(action.type) {
        case FANFICS_LOADED:
          return {...state, fanfics: action.payload};
      default:
        return state;
      }
  }