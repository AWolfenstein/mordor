import { FANFIC_CREATED,FANFIC_CA_TAG_LOADED ,FANFIC_LOADED_TO_EDIT,FANFIC_EDITED} from '../actions/addFanficActions';

var initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    fanficCreated: false,
    username: localStorage.getItem('email') ? localStorage.getItem('email') : ''
}

export default (state = initialState, action) => {

    var updated = Object.assign({}, state);
  
    switch(action.type) {
  
      case FANFIC_CREATED:
        updated['loggedIn'] = true;
        updated['fanficCreated'] = true;
        updated['email'] = action.email;
        return updated;
        case FANFIC_CA_TAG_LOADED:
          updated['categories'] = action.categories;
          updated['tags'] = action.tags;
          return updated;
          case FANFIC_LOADED_TO_EDIT:
            return {...state, fanfic: action.payload};
            case FANFIC_EDITED:
              return {...state, edited: action.payload};
      default:
        return state;
      }
  }