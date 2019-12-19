import { USER_UPDATEINFO } from '../actions/userUdateInfoActions';

var initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('email') ? localStorage.getItem('email') : ''
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state);

  switch(action.type) {

    case USER_UPDATEINFO:
      updated['loggedIn'] = true;
      updated['email'] = action.email;
      return updated;

    default:
      return state;
    }
}