import { USER_REGISTERED,USER_LOGGEDIN,USER_LOGOUT } from '../actions/authActions';

var initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('email') ? localStorage.getItem('fname') +" "+localStorage.getItem('lname') : ''
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state);

  switch(action.type) {

    case USER_REGISTERED:
      updated['loggedIn'] = true;
      updated['email'] = action.email;
      updated['fname'] = action.fname;
      updated['lname'] = action.lname;
      return updated;

    case USER_LOGGEDIN:
      updated['loggedIn'] = true;
      updated['email'] = action.email;
      updated['fname'] = action.fname;
      updated['lname'] = action.lname;
      return updated;

    case USER_LOGOUT:
      updated['loggedIn'] = false;
      updated['email'] = '';
      updated['fname'] = '';
      updated['lname'] = '';
      return updated;

    default:
      return state;
    }
}