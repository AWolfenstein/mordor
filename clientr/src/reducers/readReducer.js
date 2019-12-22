import { FANFIC_LOADED_TO_READ,COMMENT_LOADED,COMMENT_NEW} from '../actions/readActions';

var initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    username: localStorage.getItem('email') ? localStorage.getItem('email') : ''
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);
  
    switch(action.type) {
        case FANFIC_LOADED_TO_READ:
          return {...state, fanfics: action.payload};
         
            case COMMENT_LOADED:
              return {...state, comments: action.payload};
             
                case COMMENT_NEW:
                  return {...state, newcomment: action.payload};
      default:
        return state;
      }
  }