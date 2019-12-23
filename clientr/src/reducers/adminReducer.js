import { ADMIN_ALL_USERS_LOADED,ADMIN_USER_REMOVED,ADMIN_USER_BANNED,ADMIN_USER_UNBANNED,ADMIN_USER_ADMINNED,ADMIN_USER_UNADMINNED} from '../actions/adminActions';

var initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('email') ? localStorage.getItem('email') : ''
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);
  
    switch(action.type) {
        case ADMIN_ALL_USERS_LOADED:
          return {...state, adminaction: action.payload};
          case ADMIN_USER_REMOVED:
          return {...state, adminaction: action.payload};
          case ADMIN_USER_BANNED:
            return {...state, adminaction: action.payload};
            case ADMIN_USER_UNBANNED:
            return {...state, adminaction: action.payload};
            case ADMIN_USER_ADMINNED:
                return {...state, adminaction: action.payload};
                case ADMIN_USER_UNADMINNED:
                return {...state, adminaction: action.payload};
            
      default:
        return state;
      }
  }