import {USER_FANFIC_LOADED,USER_FANFIC_DELETED } from '../actions/myFanficsActions';


var initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('email') ? localStorage.getItem('email') : ''
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);
  
    switch(action.type) {
        case USER_FANFIC_LOADED:
          return {...state, fanfics: action.payload};
          case USER_FANFIC_DELETED:
            return {...state, fanfics: action.payload};
      default:
        return state;
      }
  }