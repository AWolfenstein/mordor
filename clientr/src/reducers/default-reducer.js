// default reducer
// Note: You can remove this reducer and create your own reducer

import { DEFAULT_LANG } from '../actions';

export default (state = {}, action) => {
    switch(action.type) {
        case DEFAULT_LANG:
            return {...state,lang:action.lang,title:action.title};
        default:
            return state;
    }
}