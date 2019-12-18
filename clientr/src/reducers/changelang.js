import { CHANGE_LANG } from '../actions/changelang';

export default ( state = {}, action) => {
    switch(action.type) {
        case CHANGE_LANG:
console.log(action)
            return {...state,lang:action.lang,title:action.title};
        default:
            return state;
    }
}